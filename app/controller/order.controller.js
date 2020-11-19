const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

// Create and Save a new 
exports.create = (req, res) => {

    if (!req.body.order_id) {
        res.status(400).send({
          message: "Product ID cannot be empty!"
        });
        return;
      }
     
      const order = {
        Order_ID: req.body.Order_ID,
        Customer_Phone: req.body.Customer_Phone,
        Order_Timestamp: req.body.Order_Timestamp,
        Product_Code: req.body.Product_Code,
        Product_Name: req.body.Product_Name,
        Quantity: req.body.Quantity,
        Price: req.body.Price,
      };
      
      Order.create(order)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the ORDER."
          });
        });
};


// Retrieve all orders from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ORDER."
      });
    });
};


// Find a single order with an id
exports.findOne = (req, res) => {
  const id = req.body.order_id;

  Order.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving order with id=" + id
      });
    });
};


// Update a order by the id in the request
exports.update = (req, res) => {
  const id = req.body.order_id;

 Order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order with id=${id}. Maybe Product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
};



// Delete a order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.order_id;

  Order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete order with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order with id=" + id
      });
    });
};