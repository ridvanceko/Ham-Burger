var mysql = require("mysql");
var connection;


  if(process.env.JAWSDB_AMBER_URL) {connection = mysql.createConnection(process.env.JAWSDB_AMBER_URL);
  } else{
    connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
  });
  };

connection.connect(function(err){
  if(err)throw err;
  console.log("Connected: "+connection.threadId);

})

module.exports = connection;