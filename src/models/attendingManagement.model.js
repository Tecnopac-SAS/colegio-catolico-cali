const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class AttendingManagement extends Model {}
AttendingManagement.init({

    code:DataTypes.STRING,
    name:DataTypes.STRING,
    surname:DataTypes.STRING,
    email:DataTypes.STRING,
    pension:DataTypes.STRING,
    balance:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "attendingManagement",
});

module.exports = AttendingManagement;