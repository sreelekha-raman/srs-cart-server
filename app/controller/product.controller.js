const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const ProductId=req.body.PId;
    const ProductName=req.body.Pname;

    console.log(ProductId ,ProductName);

    if (!ProductId) {
        res.status(400).send({
          message: "Product ID cannot be empty!"
        });
        return;
      }
     
      const product = {
        product_id: ProductId,
        product_name: ProductName,
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