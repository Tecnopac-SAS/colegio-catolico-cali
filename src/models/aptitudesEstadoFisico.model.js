const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class AptitudesEstadoFisico extends Model {}
AptitudesEstadoFisico.init({
    deporteGusto:DataTypes.STRING,
    arteGusto:DataTypes.STRING,
    distincionDeporte:DataTypes.STRING,
    distincionArtistica:DataTypes.STRING,
    pasatiempos:DataTypes.STRING,
    coleccion:DataTypes.STRING,
    estadoSalud:DataTypes.STRING,
    enfermedades:DataTypes.STRING,
    medicamentos:DataTypes.STRING,
    limitacionEducacionFisica:DataTypes.STRING,
    tipoSangre:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "aptitudesEstadoFisico",
});

module.exports = AptitudesEstadoFisico;