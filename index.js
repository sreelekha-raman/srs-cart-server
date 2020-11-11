const express= require("express");
const bodyparser=require("body-parser");
const request =require("request");
const https=require("https");



const app=express();
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

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running ");
});