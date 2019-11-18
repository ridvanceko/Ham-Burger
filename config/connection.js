var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
})

connection.connect(function(err){
  if(err)throw err;
  console.log("Connected: "+connection.threadId);

})

module.exports = connection;