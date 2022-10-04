const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class RegistrationType extends Model {}
RegistrationType.init({
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
    modelName: "registrationType",
});

module.exports = RegistrationType;