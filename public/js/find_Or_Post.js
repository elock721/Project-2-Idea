$(document).ready(function () {
    // Getting references to our form and inputs
    var findTruckForm = $("form.find");
    var truckNameInput = $("input#truck_name");
    var locationInput = $("input#location");
    var cuisineTypeInput = $("input#cuisine_type");

    var addTruckForm = $("form.add");
    var addTruckNameInput = $("input#add_truck_name");
    var addLocationInput = $("input#add_location");
    var addCuisineTypeInput = $("input#add_cuisine_type");

    var tableList = $("#tableList");
    var tableBody = $("#tableBody");

    findTruckForm.on("submit", function (event) {
        event.preventDefault();

        // tableList.empty();
        $(".table").find('tbody').empty();
        
        // var userData = {
        //     name: truckNameInput.val().trim(),
        //     cuisine: cuisineTypeInput.val().trim(),
        //     neighborhood: locationInput.val().trim()

        // }

        // $.get("/api/trucks", function (data) {
        //    console.log(data);
        // });

        $.ajax({ url: "/api/trucks", method: "GET" })
            .then(function (data) {

                console.log(data);
                console.log("------------------------------------");

                for (var i = 0; i < data.length; i++) {

                    // var listItem = $("<li class='list-group-item mt-4'>");
                    // listItem.append(
                    //     $("<p>").text(data[i].id + " " + data[i].name + " " + data[i].cuisine + " " + data[i].neighborhood)
                    // );

                    // var rowsToAdd = [];

                    // var newTR = $("<tr>");
                    // newTR.append("<td>" + data[i].id + "</td>");
                    // newTR.append("<td>" + data[i].name + "</td>");
                    // newTR.append("<td>" + data[i].cuisine + "</td>");
                    // newTR.append("<td>" + data[i].neighborhood + "</td>");

                    // rowsToAdd.push(newTR);
                    // console.log(rowsToAdd);
                    // tableList.append(rowsToAdd);

                    $(".table").find('tbody')
                        // .append($('<tr>').append($('<td>').append($('<img>').attr('src', 'img.png').text('Image cell'))))
                        .append($('<tr>')
                        // .append($('<td>').text(data[i].id))
                        .append($('<th scope="row">').text(data[i].id))
                        .append($('<td>').text(data[i].name))
                        .append($('<td>').text(data[i].cuisine))
                        .append($('<td>').text(data[i].neighborhood)));



                }
            });









    });


    addTruckForm.on("submit", function (event) {
        event.preventDefault();

        var addUserData = {
            name: addTruckNameInput.val().trim(),
            cuisine: addCuisineTypeInput.val().trim(),
            neighborhood: addLocationInput.val().trim()

        }



        $.post("/api/trucks", addUserData)
            .then(function (data) {
                console.log(data);
            });


    });


});
