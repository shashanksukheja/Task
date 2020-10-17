const { urlencoded } = require("express");
const express =require("express");
const Router=express.Router();
const mysqlConnection=require("../src/connection");

Router.get("/love", (req,res)=>{
    mysqlConnection.query("Select * from people", (err, rows, fields)=>{
        if(!err)
        {
            res.render("login");
            
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/login",(req,res,next)=>{
    res.render("login");
});
Router.get("/dashboard",(req,res,next)=>{
    res.render("dashboard");
});

Router.get("/registration",(req,res,next)=>{
    res.render("registration");
});


Router.post("/login",(req,res,next)=>{
    var sql = `Select * from people WHERE emailid = ? and password= ? )`;
     mysqlConnection.query(sql,[req.body.email],[req.body.password],(err, rows,fields)=> {
     if (err) throw err;
     res.redirect('/dashboard');
   });
});

Router.post("/registration",(req,res,next)=>{
    var sql = "INSERT INTO company.people(emailid,password,name) VALUES (?)";
    var values = [req.body.email,req.body.password,req.body.name];
    console.log(values);
  mysqlConnection.query(sql, [values], function (err, result) {
    if (err) throw err;
   console.log("inserted");
   
  });
  res.render("login");
});
module.exports =Router;