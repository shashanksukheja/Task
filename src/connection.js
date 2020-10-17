const mysql =require("mysql");
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'root',
        database:'company',
        multipleStatements:true
    }
);

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        throw err;
    }
    
}); 

module.exports=connection;