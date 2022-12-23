const Role = require('./role.model');
const User = require('./user.model');
const Period = require('./period.model');
const Inscription = require('./inscription.model');
const Grade = require('./grade.model')
const TuitionType = require('./tuitionType.model');
const Tuition = require('./tuition.model');
const Pension = require('./pension.model')
const recoverPassword = require('./recoverPassword.model')
const Teacher = require('./teacher.model')
const Course = require('./courses.model')
const Extracurricular = require('./extracurricular.model')
const MediasTecnicas = require('./technical.model')
const Estudiante = require('./studentDatabase.model')
const HistorialAcademico = require('./historialAcademico.model')
const Aptitudes = require('./aptitudesEstadoFisico.model')
const PadreFamilia = require('./padreFamilia.model')
const Acudiente = require('./acudiente.model')
const CanalReferencia = require('./canalReferencia.model')
const Hermano = require('./hermanos.model')

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


/*TuitionType.belongsTo(Grade, { as: "tuitionTypeAsGrade", foreignKey: "idGrade" });
Grade.hasMany(TuitionType, { as: "gradesAsTuitionType", foreignKey: "idGrade" });*/


// Tuition.belongsTo(TuitionType, { as: "tuitionAsTuitionType", foreignKey: "idTuition" });
// TuitionType.hasMany(Tuition, { as: "tuitionTypeAsTuition", foreignKey: "idTuition" });


/*Pension.belongsTo(Grade, { as: "pensionAsGrade", foreignKey: "idGrade" });
Grade.hasMany(Pension, { as: "gradesAsPension", foreignKey: "idGrade" });*/


Course.belongsTo(Teacher, { as: "courseAsTeacher", foreignKey: "idTeacher" });
Teacher.hasMany(Course, { as: "teacherAsCourse", foreignKey: "idTeacher" });


Extracurricular.belongsTo(Teacher, { as: "extracurricularAsTeacher", foreignKey: "idTeacher" });
Teacher.hasMany(Extracurricular, { as: "teacherAsExtracurricular", foreignKey: "idTeacher" });

MediasTecnicas.belongsTo(Teacher, { as: "mediasTecnicasAsTeacher", foreignKey: "idTeacher" });
Teacher.hasMany(MediasTecnicas, { as: "teacherAsMediasTecnicas", foreignKey: "idTeacher" });


HistorialAcademico.belongsTo(Estudiante, { as: "historialAcademicoAsEstudiante", foreignKey: "idEstudiante"});
Estudiante.hasMany(HistorialAcademico, { as: "estudianteAshistorialAcademico", foreignKey: "idEstudiante" });

Aptitudes.belongsTo(Estudiante, { as: "aptitudesAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(Aptitudes, { as: "estudianteAsAptitudes", foreignKey: "idEstudiante" });


PadreFamilia.belongsTo(Estudiante, { as: "padreFamiliaAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(PadreFamilia, { as: "estudianteAsPadreFamilia", foreignKey: "idEstudiante" });


Acudiente.belongsTo(Estudiante, { as: "acudienteAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(Acudiente, { as: "estudianteAsAcudiente", foreignKey: "idEstudiante" });


CanalReferencia.belongsTo(Estudiante, { as: "canalReferenciaAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(CanalReferencia, { as: "estudianteAsCanalReferencia", foreignKey: "idEstudiante" });


Hermano.belongsTo(Estudiante, { as: "hermanoAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(Hermano, { as: "estudianteAsHermano", foreignKey: "idEstudiante" });