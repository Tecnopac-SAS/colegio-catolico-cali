const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class RecoverPassword extends Model {}
RecoverPassword.init({
    dateRecovery: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },


}, 

{
    sequelize,
    modelName: "recoverPassword",
  
});

module.exports = RecoverPassword;