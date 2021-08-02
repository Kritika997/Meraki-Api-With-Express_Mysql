const mysql = require("mysql");

var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Nav@gur1",
    database:"Meraki_APi_Mysql"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
// connection.query("CREATE TABLE MearkiData(id varchar(255),name varchar(255),type varchar(255),logo varchar(255), short_description varchar(255))",function(err){
//     if(err) throw err;
//     console.log("created")
// })

module.exports = connection;