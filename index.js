const express= require("express");
const bodyparser=require("body-parser");
const cors = require("cors");
const passport   = require('passport')
const session    = require('express-session')

const app=express();

var corsOptions = {
  origin:"http://localhost:3000"
};

app.use(cors(corsOptions)); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));



const db = require("./app/models");
db.sequelize.sync();



app.get("/",function(req,res){
    res.send("Server is running.");
  }); 

require("./app/routes/product.routes.js")(app);
require("./app/routes/order.routes.js")(app);
require("./app/routes/customer.routes.js")(app);
require("./app/routes/cart.routes.js")(app);

app.listen(process.env.PORT || 3000,()=>{
    console.log("-------------------------------------------------------Server is running---------------------------------------------- ");
});