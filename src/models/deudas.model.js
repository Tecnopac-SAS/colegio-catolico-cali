const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Deudas extends Model {}
Deudas.init({
    deudaCode:DataTypes.STRING,
    concepto:DataTypes.STRING,
    fechaInicio:DataTypes.DATE,
    fechaFinal:DataTypes.DATE,
    monto:DataTypes.DOUBLE,
    estado:DataTypes.STRING,
    cobro:DataTypes.STRING,
    cobroValue:DataTypes.STRING,
}, 
{
    sequelize,
    modelName: "deudas",
});

module.exports = Deudas;