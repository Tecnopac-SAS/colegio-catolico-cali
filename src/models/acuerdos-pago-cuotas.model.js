const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class AcuerdosPagosCuotas extends Model {}
AcuerdosPagosCuotas.init({
    cuota:DataTypes.INTEGER,
    fechaPago:DataTypes.DATE,
    monto:DataTypes.DOUBLE,
}, 
{
    sequelize,
    modelName: "AcuerdosPagosCuotas",
});

module.exports = AcuerdosPagosCuotas;