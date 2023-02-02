const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class TechnicalInscription extends Model {}
TechnicalInscription.init({
    monto:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
}, 

{
    sequelize,
    modelName: "TechnicalInscription",
});

module.exports = TechnicalInscription;