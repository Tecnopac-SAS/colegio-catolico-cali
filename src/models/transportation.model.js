const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Transportation extends Model {}
Transportation.init({

    routeName:DataTypes.STRING,
    routeNumber:DataTypes.STRING,
    responsible:DataTypes.STRING,
    price:DataTypes.BIGINT,
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