const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class TuitionType extends Model {}
TuitionType.init({
    description:DataTypes.STRING,
    price:DataTypes.BIGINT,
    startDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    surcharge:DataTypes.BIGINT,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "tuitionType",
});

module.exports = TuitionType;