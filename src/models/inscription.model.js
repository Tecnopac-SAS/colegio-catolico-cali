const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class Inscription extends Model {}
Inscription.init({
    price:DataTypes.BIGINT,
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