const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')

class Certificate extends Model {}
Certificate.init({

    concept:DataTypes.STRING,
    time:DataTypes.BIGINT,
    channel:DataTypes.STRING,
    applicant:DataTypes.STRING,
    price:DataTypes.BIGINT,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
}, 

{
    sequelize,
    modelName: "certificate",
});

module.exports = Certificate;