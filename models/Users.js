module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: DataTypes.STRING
    });

    User.associate = (models) => {
        User.hasMany(models.List, {
            foreignKey: 'owner'
        });
        User.hasMany(models.Item, {
            foreignKey: 'creatorId'
        });
      };
  
    return User;
  };