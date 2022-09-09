const Sequelize  = require('sequelize');
const config = require("../../config");
//const mysql2 =  require('mysql2')

const sequelize = new Sequelize(
   config.db.dbName,
   config.db.user,
   config.db.pass, 
    {
    host: config.db.host,
    dialect: 'mysql',
    dialectOptions: {
      options: {
          encrypt: true,
      }
    }
  });
  
  try {
    sequelize.authenticate();
    console.log('Conexion a la base de datos exitosa: ' + config.db.dbName);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize;


