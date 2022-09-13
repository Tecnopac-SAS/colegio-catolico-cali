/* const Sequelize  = require('sequelize');
const config = require("../../config/config.json");
//const mysql2 =  require('mysql2')

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,

    {
    host: config.development.host,
    dialect: config.development.dialect,
    dialectOptions: {
      options: {
          encrypt: true,
      }
    }
  });
  
  try {
    sequelize.authenticate();
    console.log('Conexion a la base de datos exitosa: ' +  config.development.database);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 
  module.exports = sequelize; */
