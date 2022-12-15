const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class PadreFamilia extends Model {}
PadreFamilia.init({
    estado:DataTypes.STRING,
    vive:DataTypes.BOOLEAN,
    tipoDocumento:DataTypes.STRING,
    identificacion:DataTypes.STRING,
    nombres:DataTypes.STRING,
    apellidos:DataTypes.STRING,
    profesion:DataTypes.STRING,
    dondeTrabaja:DataTypes.STRING,
    cargo:DataTypes.STRING,
    ingresoMensual:DataTypes.DOUBLE,
    correoElectronico:DataTypes.STRING,
    direccion:DataTypes.STRING,
    telefono:DataTypes.STRING,
    celular:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "padreFamilia",
});

module.exports = PadreFamilia;