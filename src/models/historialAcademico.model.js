const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class HistorialAcademico extends Model {}
HistorialAcademico.init({
    // preescolar:DataTypes.STRING,
    // gradoCursadoPreescolar:DataTypes.BOOLEAN,
    // gradoCursadoJardin:DataTypes.BOOLEAN,
    // gradoCursadoTransicion:DataTypes.BOOLEAN,
    // primaria:DataTypes.STRING,
    // gradoCursadoPrimaria1:DataTypes.BOOLEAN,
    // gradoCursadoPrimaria2:DataTypes.BOOLEAN,
    // gradoCursadoPrimaria3:DataTypes.BOOLEAN,
    // gradoCursadoPrimaria4:DataTypes.BOOLEAN,
    // gradoCursadoPrimaria5:DataTypes.BOOLEAN,
    // bachillerato:DataTypes.STRING,
    // gradoCursadoBachillerato6:DataTypes.BOOLEAN,
    // gradoCursadoBachillerato7:DataTypes.BOOLEAN,
    // gradoCursadoBachillerato8:DataTypes.BOOLEAN,
    anioAnterior:DataTypes.STRING,
    motivoRetiro:DataTypes.STRING,
    repeticionAnio:DataTypes.STRING,
    distincionAcademica:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "historialAcademico",
});

module.exports = HistorialAcademico;