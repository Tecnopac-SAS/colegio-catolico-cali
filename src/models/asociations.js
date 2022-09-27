const Role = require('./role.model');
const User = require('./user.model');
const Period = require('./period.model');
const Grade = require('./grade.model');

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.belongsTo(Role, { as: "userAsRole", foreignKey: "idRole" });

// Añade una clave userId a la tabla addresses
Role.hasMany(User, { as: "rolesAsUser", foreignKey: "idRole" });

Grade.belongsTo(User, { as: "gradeAsUser", foreignKey: "idUser" });

User.hasMany(Grade, { as: "userAsgrade", foreignKey: "idUser" });


Grade.belongsTo(Period, { as: "gradeAsPeriod", foreignKey: "idPeriod" });

Period.hasMany(Grade, { as: "PeriodAsgrade", foreignKey: "idPeriod" });