module.exports = (sequelize, DataTypes) => {
    var List = sequelize.define('List', {
      title: DataTypes.STRING
    });
  
    List.associate = (models) => {
      List.hasMany(models.Item, {
          foreignKey: 'ListId'
      });
    };
  
    return List;
  };