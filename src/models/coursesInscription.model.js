const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class CoursesInscription extends Model {}
CoursesInscription.init({
    monto:DataTypes.STRING,
    metodoPago:DataTypes.STRING,
}, 

{
    sequelize,
    modelName: "coursesInscription",
});

module.exports = CoursesInscription;