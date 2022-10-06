const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class ExtraCurricular extends Model {}
ExtraCurricular.init({
    imagen:DataTypes.STRING,
    activity:DataTypes.STRING,
    startDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    teacher:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "extraCurricular",
});

module.exports = ExtraCurricular;