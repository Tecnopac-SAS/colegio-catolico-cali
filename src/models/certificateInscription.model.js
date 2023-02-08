const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class CertificateInscription extends Model {}
CertificateInscription.init({
    monto:DataTypes.STRING,
    detalle:DataTypes.STRING,
    canalEntrega:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
    entregado:DataTypes.BOOLEAN,
}, 

{
    sequelize,
    modelName: "certificateInscription",
});

module.exports = CertificateInscription;