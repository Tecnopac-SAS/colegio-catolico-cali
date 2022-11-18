const Role = require('./role.model');
const User = require('./user.model');
const Period = require('./period.model');
const Inscription = require('./inscription.model');
const Grade = require('./grade.model')
const TuitionType = require('./tuitionType.model');
const Tuition = require('./tuition.model');
const Pension = require('./pension.model')
const recoverPassword = require('./recoverPassword.model')

// Uno a uno
// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.belongsTo(Role, { as: "userAsRole", foreignKey: "idRole" });
// Añade una clave userId a la tabla addresses
Role.hasMany(User, { as: "rolesAsUser", foreignKey: "idRole" });

recoverPassword.belongsTo(User, { as: "recoverPasswordAsUser", foreignKey: "idUser" });
User.hasMany(recoverPassword, { as: "userAsrecoverPassword", foreignKey: "idUser" });

Inscription.belongsTo(User, { as: "inscriptionAsUser", foreignKey: "idUser" });
User.hasMany(Inscription, { as: "userAsInscriptionAsUser", foreignKey: "idUser" });


Inscription.belongsTo(Period, { as: "inscriptionAsPeriod", foreignKey: "idPeriod" });
Period.hasMany(Inscription, { as: "periodAsInscriptionAsUser", foreignKey: "idPeriod" });


TuitionType.belongsTo(Grade, { as: "tuitionTypeAsGrade", foreignKey: "idGrade" });
Grade.hasMany(TuitionType, { as: "gradesAsTuitionType", foreignKey: "idGrade" });


Tuition.belongsTo(TuitionType, { as: "tuitionAsTuitionType", foreignKey: "idTuition" });
TuitionType.hasMany(Tuition, { as: "tuitionTypeAsTuition", foreignKey: "idTuition" });


Pension.belongsTo(Grade, { as: "pensionAsGrade", foreignKey: "idGrade" });
Grade.hasMany(Pension, { as: "gradesAsPension", foreignKey: "idGrade" });
