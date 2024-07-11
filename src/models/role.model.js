const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcrypt')

class Role extends Model {}

Role.init({
    role: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, 

{
    sequelize,
    modelName: "role",
 
});

module.exports = Role;