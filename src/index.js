const express =require("express");
const port = 5000;
const path=require("path");
const bodyParser = require("body-parser");
const mysqlConnection=require("./connection");
const PeopleRoutes = require("../routes/people");

const app=express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

 const templatePath= path.join(__dirname ,"../templates/views");
 const staticPath= path.join(__dirname ,"../public");

app.use("/",PeopleRoutes);


app.use(express.static(staticPath));

app.set('views',templatePath);
app.set("view engine","hbs");


app.listen(port,() => {

       console.log(`Server running at ${port}`);
});