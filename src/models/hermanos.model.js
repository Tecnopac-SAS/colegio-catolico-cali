const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Hermano extends Model {}
Hermano.init({
    nombres:DataTypes.STRING,
    //apellidos:DataTypes.STRING,
    //nivelEstudio:DataTypes.STRING,
    //institucion:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "hermano",
});

module.exports = Hermano;