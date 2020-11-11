const express= require("express");
const bodyparser=require("body-parser");
const request =require("request");
const https=require("https");
const cors = require("cors");
const sequelize=require("sequelize");

const app=express();



var corsOptions = {
  origin:"http://localhost:3000"
};

app.use(cors(corsOptions)); 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html");
  }); 

// app.post("/products",function(req,res){
//       const ProductId=req.body.PId;
//       const ProductName=req.body.Pname;
//       console.log(ProductId ,ProductName);
// });

require("./app/routes/productroute.js");

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running ");
});