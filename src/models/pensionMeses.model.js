const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class PensionesMeses extends Model {}
PensionesMeses.init({
    // mes:DataTypes.STRING,
    fechaPago:DataTypes.STRING,
    valor:DataTypes.DOUBLE,
    mora:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    estatus:DataTypes.STRING,
    valorConDescuento:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
}, 
{
    sequelize,
    modelName: "pensionesMeses",
});

module.exports = PensionesMeses;