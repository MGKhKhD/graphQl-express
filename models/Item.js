module.exports = (sequelize, DataTypes) => {
    var Item = sequelize.define('Item', {
        item: DataTypes.STRING
    });
  
    return Item;
  };