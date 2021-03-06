const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphqldb', 'graphqldb_admin', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});



const db ={
    User: sequelize.import('./Users'),
    List: sequelize.import('./List'),
    Item: sequelize.import('./Item')
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;