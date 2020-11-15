const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.product_code) {
        res.status(400).send({
          message: "Product ID cannot be empty!"
        });
        return;
      }
     
      const product = {
        product_code: req.body.product_code,
        product_name: req.body.product_name,
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