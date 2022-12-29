const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Leveling extends Model {}
Leveling.init({
    //codigo:DataTypes.STRING,
    //nombres:DataTypes.STRING,
    //apellidos:DataTypes.STRING,
    modalidadCurso:DataTypes.STRING,
    asignatura:DataTypes.STRING,
    grado:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    estadoAprobado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "leveling",
});

module.exports = Leveling;