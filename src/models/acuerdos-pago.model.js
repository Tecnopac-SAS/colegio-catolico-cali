const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class AcuerdosPagos extends Model {}
AcuerdosPagos.init({
    fecha:DataTypes.DATE,
    description:DataTypes.STRING,
    valor:DataTypes.DOUBLE,
    estado:DataTypes.STRING,
}, 
{
    sequelize,
    modelName: "AcuerdosPagos",
});

module.exports = AcuerdosPagos;