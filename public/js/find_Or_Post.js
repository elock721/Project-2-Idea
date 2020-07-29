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


    findTruckForm.on("submit", function (event) {
        event.preventDefault();

        var userData = {
            name: truckNameInput.val().trim(),
            cuisine: cuisineTypeInput.val().trim(),
            neighborhood: locationInput.val().trim()

        }
        
        $.get("/api/trucks", function (data) {
            alert(data);
        });

        //alert(userData.truck);
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

        alert(userData.truck);
    });


});
