const connection = require("../db_connect/db");

exports.get = (req,res)=>{
    connection.query("select * from MearkiData", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        };
    });
};

exports.post = (req,res)=>{
    const Mydata = {
        id:req.body.id,
        name:req.body.name,
        type:req.body.type,
        logo:req.body.logo,
        short_description:req.body.short_description
    };
    var value = [];
    for(i in Mydata){
        // value.push(Mydata[i].id,Mydata[i].name,Mydata[i].type,Mydata[i].logo,Mydata[i].short_description)
        value.push(Mydata[i])
    };
    var sql = 'INSERT INTO MearkiData(id,name,type,logo,short_description) VALUES ?'
    connection.query(sql, [[value]], (err, result) => {
        if (err){
            res.send(err);
        }else{
            res.send(result);
        };
    });
};
exports.put = (req,res)=>{
    const Mydata = {
        id:req.body.id,
        name:req.body.name,
    };
    connection.query(`UPDATE MearkiData SET name= '${Mydata.name}' WHERE id= '${Mydata.id}'`,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        };
    });
};

exports.delete = (req,res)=>{
    const Mydata = {
        id:req.body.id,
        name:req.body.name,
    };
    connection.query(`DELETE FROM MearkiData where name= '${Mydata.name}'`,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        };
    });
};

