const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const ProductId=req.body.PId;
    const ProductName=req.body.Pname;
    console.log(ProductId ,ProductName);

    if (!ProductId) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
     
      const product = {
        Id: ProductId,
        Name: ProductName,
      };
    
      
      Product.create(product)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the product."
          });
        });
};