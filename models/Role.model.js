'use strict';
const sequelize = require('../src/db/databaseSqm')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.Producto,{
        foreignKey: 'idRole'
      })
    }
  }
  Role.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};