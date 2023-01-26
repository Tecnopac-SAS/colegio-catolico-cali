const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class MatriculasPagos extends Model {}
MatriculasPagos.init({
    monto:DataTypes.DOUBLE,
    metodoPago:DataTypes.STRING,
    fechaPago:DataTypes.STRING,
}, 
{
    sequelize,
    modelName: "matriculasPagos",
});

module.exports = MatriculasPagos;