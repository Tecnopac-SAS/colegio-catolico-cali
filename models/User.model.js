'use strict';
//const sequelize = require('../src/db/databaseSqm')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role,{
        foreignKey: 'id',
        targetKey :'idRole'
      })
    }
  }
  User.init({
    userName: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    prueba: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.STRING,
    idRole: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};