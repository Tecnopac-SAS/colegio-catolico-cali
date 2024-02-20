const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Discount extends Model {}
Discount.init({

    name:DataTypes.STRING,
    starDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    percentage:DataTypes.STRING,
    frequency:DataTypes.STRING,
    service:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    },
}, 

{
    sequelize,
    modelName: "discount",
});

module.exports = Discount;