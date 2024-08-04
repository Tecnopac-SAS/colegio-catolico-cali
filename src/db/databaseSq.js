const Sequelize  = require('sequelize');
const config = require("../../config");

const sequelize = new Sequelize(
  config.db.dbName,
  config.db.user,
  config.db.pass, 
   {
   host: config.db.host,
   dialect: 'mysql',
   pool: {
     acquire: 30000, // tiempo de espera en milisegundos (por ejemplo, 30 segundos)
   },
   retry: {
     match: [/Deadlock/i],
     max: 3, // Maximum rety 3 times
     backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
     backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
   },
 });

  try {
    sequelize.authenticate();
    console.log('Conexion a la base de datos exitosa: ' + config.db.dbName);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize;


