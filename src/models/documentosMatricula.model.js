const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class DocumentosMatricula extends Model {}
DocumentosMatricula.init({

    name:DataTypes.STRING,
    apply:DataTypes.STRING,
    grade:DataTypes.STRING,
    file:DataTypes.STRING,
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