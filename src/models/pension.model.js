const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Pension extends Model {}
Pension.init({

    price:DataTypes.BIGINT,
    discount:DataTypes.BIGINT,
    use:DataTypes.STRING,
    idGrade:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "pension",
});

module.exports = Pension;