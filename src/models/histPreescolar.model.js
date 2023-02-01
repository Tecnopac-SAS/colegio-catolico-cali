const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class HistPreescolar extends Model {}
HistPreescolar.init({

    nombre:DataTypes.STRING,
    gradoCursadoPreescolar:DataTypes.BOOLEAN,
    gradoCursadoJardin:DataTypes.BOOLEAN,
    gradoCursadoTransicion:DataTypes.BOOLEAN,
    idEstudiante:DataTypes.STRING,
}, 

{
    sequelize,
    modelName: "histPreescolar",
});

module.exports = HistPreescolar;