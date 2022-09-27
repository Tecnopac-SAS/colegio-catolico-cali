const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class grade extends Model {}
grade.init({
    price:DataTypes.BIGINT,
    description:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "grade",
});

module.exports = grade;