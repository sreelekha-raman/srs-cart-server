module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      Id: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      }
    });
  
    return Product;
  };