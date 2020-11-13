module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      product_id: {
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      }
    });
  
    return Product;
  };