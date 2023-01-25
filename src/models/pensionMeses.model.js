const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class PensionesMeses extends Model {}
PensionesMeses.init({
    mes:DataTypes.STRING,
    fechaPago:DataTypes.DATE,
    valor:DataTypes.DOUBLE,
    mora:DataTypes.STRING,
    estatus:DataTypes.STRING,
    valorConDescuento:DataTypes.STRING,
}, 
{
    sequelize,
    modelName: "pensionesMeses",
});

module.exports = PensionesMeses;