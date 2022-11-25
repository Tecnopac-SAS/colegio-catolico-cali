const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Courses extends Model {}
Courses.init({
    asignature:DataTypes.STRING,
    starDate:DataTypes.DATE,
    finalDate:DataTypes.DATE,
    price:DataTypes.BIGINT,
    teacher:DataTypes.STRING,
    typeCourse:DataTypes.STRING,
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