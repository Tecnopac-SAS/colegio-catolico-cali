const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class documentos extends Model {}
documentos.init({
    titulo:DataTypes.STRING,
    template:DataTypes.TEXT
}, 
{
    sequelize,
    modelName: "documentos",
});

module.exports = documentos;