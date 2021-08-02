const fs = require("fs");
const mysql = require("../db_connect/db");
const axios = require("axios");
const connection = require("../db_connect/db");

// axios.get("http://saral.navgurukul.org/api/courses").then(response=>{
//     const courses = response.data;
//     fs.writeFile("saral_courses.json",JSON.stringify(courses,null,"\t"),(err)=>{
//         if(err) throw err;
//     });
// });

var ReadData = fs.readFileSync("saral_courses.json","utf-8");
var parse = JSON.parse(ReadData);

var Insert = [];
for (i in parse["availableCourses"]){
    data=parse["availableCourses"][i]
    Insert.push([data["id"],data["name"],data["type"],data["logo"],data["short_description"]])
};

// const sql = 'INSERT INTO MearkiData(id,name,type,logo,short_description) VALUES ?'
// connection.query(sql, [Insert], (err, result) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
// });