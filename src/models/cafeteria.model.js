const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Cafeteria extends Model {}
Cafeteria.init({

    description:DataTypes.STRING,
    pay:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "cafeteria",
});

module.exports = Cafeteria;