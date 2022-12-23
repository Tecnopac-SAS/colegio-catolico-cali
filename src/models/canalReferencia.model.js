const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class CanalReferencia extends Model {}
CanalReferencia.init({
    comoSeEntero:DataTypes.STRING,
    comoSabe:DataTypes.STRING,
    porqueIngresar:DataTypes.STRING,
    nombreAcudiente:DataTypes.STRING,
    aceptaCompromisos:DataTypes.STRING,
    estadoPago:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "CanalReferencia",
});

module.exports = CanalReferencia;