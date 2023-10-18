const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Transportation extends Model {}
Transportation.init({

    routeName:DataTypes.STRING,
    routeNumber:DataTypes.STRING,
    responsible:DataTypes.STRING,
    price:DataTypes.BIGINT,
    cupo:DataTypes.INTEGER,
    cupo_disponible:DataTypes.INTEGER,
    routeType:DataTypes.STRING,
    direccion_recogida:DataTypes.STRING,
    direccion_entrega:DataTypes.STRING,
    jornada:DataTypes.INTEGER,
    descripcion:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "transportation",
});

module.exports = Transportation;