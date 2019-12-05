var mysql = require("mysql");
var connection;


  if(process.env.JAWSDB_AMBER_URL) {connection = mysql.createConnection(process.env.JAWSDB_AMBER_URL);
  } else{
    connection = mysql.createConnection({
  host: "hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "fcn4qjc9lrzi6gvd",
  password: "	icejn4mrnmkey81i",
  database: "	v1f3fy01s7bplfxi"
  });
  };

connection.connect(function(err){
  if(err)throw err;
  console.log("Connected: "+connection.threadId);

})

module.exports = connection;