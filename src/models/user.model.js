const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class User extends Model {}
User.init({
    userName:DataTypes.STRING,
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
    idRole:DataTypes.BIGINT
}, {
    sequelize,
    modelName: "user",
    hooks: {
        beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        },
      }
});

module.exports = User;