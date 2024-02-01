const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class ExtracurricularInscription extends Model {}
ExtracurricularInscription.init({
    monto:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
}, 

{
    sequelize,
    modelName: "extracurricularInscription",
});

module.exports = ExtracurricularInscription;