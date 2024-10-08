const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Estudiante extends Model {}
Estudiante.init({
    codigo:DataTypes.STRING,
    grado:DataTypes.STRING,
    nombres:DataTypes.STRING,
    apellidos:DataTypes.STRING,
    tipoDocumento:DataTypes.STRING,
    identificacion:DataTypes.STRING,
    expedicion:DataTypes.STRING,
    lugarNacimiento:DataTypes.STRING,
    fechaNacimiento:DataTypes.DATE,
    edad:DataTypes.DOUBLE,
    direccion:DataTypes.STRING,
    tipoDireccion:DataTypes.STRING,
    barrio:DataTypes.STRING,
    estrato:DataTypes.DOUBLE,
    telefono:DataTypes.STRING,
    correo:DataTypes.STRING,
    tipoCupo:DataTypes.STRING,
    viveCon:DataTypes.STRING,
    estadoEstudiante:{
    type:DataTypes.STRING,
    defaultValue: "Aspirante",
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "estudiante",
});

module.exports = Estudiante;