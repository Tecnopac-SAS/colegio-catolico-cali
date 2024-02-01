const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class SoportesPago extends Model {}
SoportesPago.init({
    paymentCode:DataTypes.STRING,
    tipoPago:DataTypes.STRING,
    viaPago:DataTypes.STRING,
    monto:DataTypes.DOUBLE,
    fecha:DataTypes.DATE
}, 
{
    sequelize,
    modelName: "soportesPago",
});

module.exports = SoportesPago;