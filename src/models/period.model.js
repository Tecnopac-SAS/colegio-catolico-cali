const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcrypt')

class Period extends Model {}
Period.init({
    age:DataTypes.DATE,
    password:DataTypes.STRING,
    identifier:DataTypes.STRING,
    consecutive:DataTypes.INTEGER,
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
  
}, 

{
    sequelize,
    modelName: "period",
    hooks: {
        beforeCreate: (period) => {
        const salt = bcrypt.genSaltSync();
        period.password = bcrypt.hashSync(period.password, salt);
        },
        beforeUpdate: (period) => {
            const salt = bcrypt.genSaltSync();
            period.password = bcrypt.hashSync(period.password, salt);
            },
      },
 
});

module.exports = Period;