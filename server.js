const express = require("express");
const route = require("../Meraki_Api_Mysql/router/route");
const parse = require("../Meraki_Api_Mysql/model/get_data");

var app = express();
app.use(express.json())
app.use(route)

app.listen(8000,function(err){
    if(err) throw err;
    console.log("listining");
});