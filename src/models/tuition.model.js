const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Tuition extends Model {}
Tuition.init({
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "tuition",
});

module.exports = Tuition;