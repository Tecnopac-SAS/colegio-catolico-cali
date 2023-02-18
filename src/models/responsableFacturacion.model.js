const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Responsable extends Model {}
Responsable.init({
    tipoPersona:DataTypes.STRING,
    razonSocial:DataTypes.STRING,
    tipoDocumento:DataTypes.STRING,
    identificacion:DataTypes.STRING,
    direccion:DataTypes.STRING,
    pais:DataTypes.STRING,
    ciudad:DataTypes.STRING,
    departamento:DataTypes.STRING,
    correoElectronico:DataTypes.STRING,
    direccion:DataTypes.STRING,
    celular:DataTypes.STRING,
    responsable:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "responsable",
});

module.exports = Responsable;