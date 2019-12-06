module.exports = function (sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
      burger_name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  });
  return burger;
};




// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb){
//     orm.all("burgers", function(res){
//       cb(res);
//     })
//   },
// update: function(id,cb){
//   orm.update("burgers",id,cb);
// },

// create: function(name,cb){
//   orm.create("burgers", name, cb);
// }

// }

// module.exports = burger;