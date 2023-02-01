const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class HistBachillerato extends Model {}
HistBachillerato.init({

    nombre:DataTypes.STRING,
    gradoCursadoBachillerato6:DataTypes.BOOLEAN,
    gradoCursadoBachillerato7:DataTypes.BOOLEAN,
    gradoCursadoBachillerato8:DataTypes.BOOLEAN,
    idEstudiante:DataTypes.STRING,
}, 

{
    sequelize,
    modelName: "histBachillerato",
});

module.exports = HistBachillerato;