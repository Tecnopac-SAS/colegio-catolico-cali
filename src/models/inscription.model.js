const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Inscription extends Model {}

Inscription.init({
    price:DataTypes.BIGINT,
    description:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "inscription",
});

module.exports = Inscription;