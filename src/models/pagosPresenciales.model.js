const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class PagosPresenciales extends Model {}
PagosPresenciales.init({
    paymentCode:DataTypes.STRING,
    servicio:DataTypes.STRING,
    observacion:DataTypes.STRING,
    monto:DataTypes.DOUBLE,
    fecha:DataTypes.DATE,
    estado: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
}, 
{
    sequelize,
    modelName: "PagosPresenciales",
});

module.exports = PagosPresenciales;