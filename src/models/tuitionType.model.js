const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class TuitionType extends Model {}
TuitionType.init({
    ordinary_price:DataTypes.BIGINT,
    extraordinary_price:DataTypes.BIGINT,
    startDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    extraordinary_startDate:DataTypes.DATE,
    extraordinary_finalDate:DataTypes.DATE,
    surcharge:DataTypes.BIGINT,
    grade:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "tuitionTypes",
    tableName: 'tuitionTypes'
});

module.exports = TuitionType;
