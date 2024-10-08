const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class DocumentosMatricula extends Model { }

DocumentosMatricula.init({
    title: DataTypes.STRING,
    canViewType: DataTypes.STRING,
    canViewValue: DataTypes.STRING,
    canViewTuitionType: DataTypes.STRING,
    documentoid: DataTypes.INTEGER,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},
    {
        sequelize,
        modelName: "documentosMatricula",
    });

module.exports = DocumentosMatricula;