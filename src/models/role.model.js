/* const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')


class Role extends Model {
    static init(sequelize) {
        super.init({
            role: DataTypes.STRING,
            isActive:DataTypes.BOOLEAN,
        }, {
            sequelize : 'roleId'
        })
    }

    static associate(models) {
        Role.hasMany(models.Producto,{
            foreignKey: 'idRole'
        })
        //this.hasMany(models.User, { foreignKey: 'idRole', as: 'user' });
    }

}

module.exports = Role; */

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