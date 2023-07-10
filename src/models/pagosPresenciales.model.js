const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class PagosPresenciales extends Model {}
PagosPresenciales.init({
    servicio:DataTypes.STRING,
    observacion:DataTypes.STRING,
    fecha:DataTypes.DATE,
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'Activo',
      },
}, 
{
    sequelize,
    modelName: "PagosPresenciales",
});

module.exports = PagosPresenciales;