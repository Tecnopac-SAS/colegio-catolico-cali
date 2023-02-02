const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Courses extends Model {}
Courses.init({
    asignature:DataTypes.STRING,
    starDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    starHour:DataTypes.STRING,
    finalHour:DataTypes.STRING,
    price:DataTypes.BIGINT,
    typeCourse:DataTypes.STRING,
    description:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "courses",
});

module.exports = Courses;