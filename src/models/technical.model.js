const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Technical extends Model {}
Technical.init({

    course:DataTypes.STRING,
    startDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    price:DataTypes.BIGINT,
    starHour:DataTypes.STRING,
    finalHour:DataTypes.STRING,
    description:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "technical",
});

module.exports = Technical;