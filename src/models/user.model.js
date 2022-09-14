/* const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class User extends Model {
    static init(sequelize) {
        super.init({
            userName:DataTypes.STRING,
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
            isActive:DataTypes.BOOLEAN,
            idRole:DataTypes.BIGINT
        }, {
            sequelize,
            hooks: {
                beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
                },
              },
        })
    }

    static associate(models) {
        Producto.belongsTo(models.Role,{
            foreignKey: 'id',
            target_key:'idRole'
        })
        //this.belongsTo(models.Role, { foreignKey: 'idRole', as: 'role' });
      }

}

module.exports = User; */

const {Sequelize ,Model, DataTypes } = require('sequelize');
const sequelize = require('../db/databaseSq')
const bcrypt = require('bcryptjs')

class User extends Model {}
User.init({
    userName:DataTypes.STRING,
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN
}, 

{
    sequelize,
    modelName: "user",
    hooks: {
        beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        },
      },

      
      
});

module.exports = User;