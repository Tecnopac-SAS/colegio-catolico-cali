const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class CafeteriaPagos extends Model {}
CafeteriaPagos.init({

    price:DataTypes.DOUBLE,
    cantMenu:DataTypes.INTEGER,
    productMenu:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
    // mesPago:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "cafeteriaPagos",
});

module.exports = CafeteriaPagos;