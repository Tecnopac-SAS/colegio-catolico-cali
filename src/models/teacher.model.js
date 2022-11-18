const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Teacher extends Model {}
Teacher.init({

    name:DataTypes.STRING,
    course:DataTypes.STRING,
    email:DataTypes.STRING,
    number:DataTypes.DOUBLE,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 
{
    sequelize,
    modelName: "teacher",
});

module.exports = Teacher;