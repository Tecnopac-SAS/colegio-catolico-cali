const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class TuitionType extends Model {}
TuitionType.init({
    description:DataTypes.STRING,
    price:DataTypes.BIGINT,
    startDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    surcharge:DataTypes.BIGINT,
    grade:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "tuitionType",
    tableName: 'tuitionTypes'
});

module.exports = TuitionType;
