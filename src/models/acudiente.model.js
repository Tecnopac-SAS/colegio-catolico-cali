const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Acudiente extends Model {}
Acudiente.init({
    parentesco:DataTypes.STRING,
    estado:DataTypes.STRING,
    vive:DataTypes.STRING,
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
    bolsillo:DataTypes.DOUBLE,
    lonchera:DataTypes.DOUBLE,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "acudiente",
});

module.exports = Acudiente;