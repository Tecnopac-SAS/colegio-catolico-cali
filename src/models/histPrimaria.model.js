const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class HistPrimaria extends Model {}
HistPrimaria.init({

    nombre:DataTypes.STRING,
    gradoCursadoPrimaria1:DataTypes.BOOLEAN,
    gradoCursadoPrimaria2:DataTypes.BOOLEAN,
    gradoCursadoPrimaria3:DataTypes.BOOLEAN,
    gradoCursadoPrimaria4:DataTypes.BOOLEAN,
    gradoCursadoPrimaria5:DataTypes.BOOLEAN,
    idEstudiante:DataTypes.STRING,
}, 

{
    sequelize,
    modelName: "histPrimaria",
});

module.exports = HistPrimaria;