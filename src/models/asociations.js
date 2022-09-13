const Role = require('./role.model');
const User = require('./user.model');

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.belongsTo(Role, { as: "user", foreignKey: "idRole" });

// Añade una clave userId a la tabla addresses
Role.hasMany(User, { as: "roles", foreignKey: "idRole" });

