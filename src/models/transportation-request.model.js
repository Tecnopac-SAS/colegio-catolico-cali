const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class TransportationRequest extends Model {}
TransportationRequest.init({

    routeid:DataTypes.INTEGER,
    acudienteid:DataTypes.INTEGER,
    estudianteid:DataTypes.INTEGER,
    datosResponsable:DataTypes.STRING,
    direccion_recogida:DataTypes.STRING,
    direccion_entrega:DataTypes.STRING,
    routeType:DataTypes.INTEGER,
    estado:DataTypes.STRING
}, 
{
    sequelize,
    modelName: "transportation_requests",
});

module.exports = TransportationRequest;