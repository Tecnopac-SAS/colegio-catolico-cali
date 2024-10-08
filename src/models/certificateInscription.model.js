const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class CertificateInscription extends Model {}
CertificateInscription.init({
    monto:DataTypes.STRING,
    detalle:DataTypes.STRING,
    canalEntrega:DataTypes.STRING,
    documentUrl:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
    entregado:DataTypes.BOOLEAN,
    status:DataTypes.INTEGER,
    paymentCode:DataTypes.STRING,
    paid: {
        type: DataTypes.INTEGER,
        defaultValue: false,
    },
}, 

{
    sequelize,
    modelName: "certificateInscription",
});

module.exports = CertificateInscription;