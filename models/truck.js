// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Truck = sequelize.define("Truck", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING
    },
    cuisine: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    }
  });

  return Truck;
};

