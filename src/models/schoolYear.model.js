const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class SchoolYear extends Model {}
SchoolYear.init({

    code:DataTypes.STRING,
    age:DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "schoolYear",
});

module.exports = SchoolYear;