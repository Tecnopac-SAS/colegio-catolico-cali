const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class Role extends Model {}
Role.init({
    role: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
}, 

{
    sequelize,
    modelName: "role",
 
});

module.exports = Role;