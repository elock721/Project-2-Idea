$(document).ready(function() {
  // Getting references to our form and inputs
  var findTruckForm = $("form.find");
  var truckNameInput = $("input#truck_name");
  var cuisineTypeInput = $("input#cuisine_type");
  var locationInput = $("input#location");

  var addTruckForm = $("form.add");
  var addTruckNameInput = $("input#add_truck_name");
  var addLocationInput = $("input#add_location");
  var addCuisineTypeInput = $("input#add_cuisine_type");

  findTruckForm.on("submit", function(event) {
    event.preventDefault();
    clearTable();

    var searchBy = {
      name: truckNameInput.val().trim(),
      cuisine: cuisineTypeInput.val().trim(),
      neighborhood: locationInput.val().trim()
    };

    // Make sure atleast one field has been filled
    if (!searchBy.name && !searchBy.cuisine && !searchBy.neighborhood) {
      console.log("PLEASE SELECT ATLEAST ONE ITEM TO SEARCH FOR");

      tstQry();
      // Search by name, cuisine, neighborhood
    } else if (searchBy.name && searchBy.cuisine && searchBy.neighborhood) {
      console.log("search by ALL 3");

      // Search by name only
    } else if (searchBy.name && !searchBy.cuisine && !searchBy.neighborhood) {
      queryByName(searchBy);

      // Search by cuisine
    } else if (!searchBy.name && searchBy.cuisine && !searchBy.neighborhood) {
      console.log("search by CUISINE");
      queryByCuisine(searchBy);

      // Search by location
    } else if (!searchBy.name && !searchBy.cuisine && searchBy.neighborhood) {
      console.log("search by LOCATION");

      // Search by name and cuisine
    } else if (searchBy.name && searchBy.cuisine && !searchBy.neighborhood) {
      console.log("search by NAME & CUISINE");

      // Search by name and location
    } else if (searchBy.name && !searchBy.cuisine && searchBy.neighborhood) {
      console.log("search by NAME & LOCATION");

      // Search by cuisine and location
    } else if (!searchBy.name && searchBy.cuisine && searchBy.neighborhood) {
      console.log("search by CUISINE & LOCATION");
    }
  });

  function tstQry() {
    $.ajax({ url: "/api/trucks", method: "GET" })
    // .then (renderTable)
    .then(renderResults);
  }

  function queryByName(searchBy) {
    console.log(searchBy);
    $.get("/api/trucks/" + searchBy.name, function(qryResults) {
      // renderTable(qryResults);
      renderResults(qryResults);
    });
  }

  function queryByCuisine(searchBy) {
    $.get("/api/trucks/cuisine/" + searchBy.cuisine, function(qryResults) {
      // renderTable(qryResults);
      renderResults(qryResults);
    });
  }

  function clearTable() {
    $(".table")
      .find("tbody")
      .empty();
  }

  // function renderTable(qryResults) {
  //   for (var i = 0; i < qryResults.length; i++) {
  //     $(".table")
  //       .find("tbody")
  //       .append(
  //         $("<tr>")
  //           .append($('<th scope="row">').text(qryResults[i].id))
  //           .append($("<td>").text(qryResults[i].name))
  //           .append($("<td>").text(qryResults[i].cuisine))
  //           .append($("<td>").text(qryResults[i].neighborhood))
  //       );
  //   }
  // }

  function renderResults(qryResults) {
    
    //Using Google Maps API here - we gain access to the "map" object on our page,
    //we crate a new infoWindow object.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(30.267153, -97.743057),
      zoom: 12
    });
    var infoWindow = new google.maps.InfoWindow;
    

    for (var i = 0; i < qryResults.length; i++) {
      let coords = {lat: qryResults[i].latitude, lng: qryResults[i].longitude}
      let marker = new google.maps.Marker({position: coords, map: map});  //Creating an individual marker for each restaurant
      
      //Building the infoWindow's content for the restaurant
      let infowincontent = document.createElement('div');
      let strong = document.createElement('strong');
      strong.textContent = qryResults[i].name
      infowincontent.appendChild(strong);
      infowincontent.appendChild(document.createElement('br'));

      let text = document.createElement('text');
      text.textContent = qryResults[i].cuisine
      infowincontent.appendChild(text);

      //attach an click event listener to the marker to open the infoWindow for this restaurant
      marker.addListener('click', function() {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, marker);
      });


      let resBox = $('<div>');
      let nameEl = $('<h3>');
      let cuisineEl = $('<p>');
      let neighborhoodEl = $('<p>');

      resBox.attr('class',"card")
      nameEl.text(qryResults[i].name);
      nameEl.attr("class","title");
      cuisineEl.text(qryResults[i].cuisine);
      cuisineEl.attr("class","subtitle");
      neighborhoodEl.text(qryResults[i].neighborhood);
      neighborhoodEl.attr("class","card-footer");


      resBox.append(nameEl);
      resBox.append(cuisineEl);
      resBox.append(neighborhoodEl);

      $('.table').find('tbody').append(resBox);
    }
  }
  

  // WORKS FINE
  addTruckForm.on("submit", async function(event) {
    event.preventDefault();
    //Generating fake Coordinates in Austin, TX
    let lat = "30.24" + (7374 + Math.floor(Math.random()*200)); //7374 - 7573  -> 30.247374 - 30.247573
    let lng = "-97.77" + (6700 + Math.floor(Math.random()*100)); //6700 - 6799 -> -97.776700 - -97.776799
    var addUserData = {
      name: addTruckNameInput.val().trim(),
      cuisine: addCuisineTypeInput.val().trim(),
      neighborhood : addLocationInput.val().trim(),
      latitude : lat,
      longitude : lng

    };

    $.post("/api/trucks", addUserData).then(function(data) {
      console.log(data);
    });
  });
});

// function renderTable(data) {
//     $(".table").find('tbody').empty();

// $.ajax({ url: "/api/trucks", method: "GET" })
//     .then(function (data) {

//         console.log(data);
//         console.log("------------------------------------");

//         for (var i = 0; i < data.length; i++) {

//             $(".table").find('tbody')
//                 .append($('<tr>')
//                     .append($('<th scope="row">').text(data[i].id))
//                     .append($('<td>').text(data[i].name))
//                     .append($('<td>').text(data[i].cuisine))
//                     .append($('<td>').text(data[i].neighborhood)));
//         }
//     });

// }
