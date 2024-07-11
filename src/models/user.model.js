const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq');
const bcrypt = require('bcrypt');

class User extends Model {}
User.init({
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "user",
    hooks: {
        beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeUpdate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
            },
      },
 
});

module.exports = User;