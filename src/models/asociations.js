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
const Responsable = require('./responsableFacturacion.model');
const CanalReferencia = require('./canalReferencia.model')
const Hermano = require('./hermanos.model');
const Leveling = require('./leveling.model');
const PensionesMeses = require('./pensionMeses.model');
const MatriculasPagos = require('./matriculasPagos.model');
const CoursesInscription = require('./coursesInscription.model');
const TechnicalInscription = require('./technicalInscription.model');
const Technical = require('./technical.model');
const ExtracurricularInscription = require('./extracurricularInscription.model');
const CertificateInscription = require('./certificateInscription.model');
const Certificate = require('./certificates.model');

// Uno a uno
CertificateInscription.belongsTo(Certificate, { as: "certificateInscriptionAsCertificate", foreignKey: "idCertificate" });
CertificateInscription.belongsTo(Grade, { as: "certificateInscriptionAsGrade", foreignKey: "idGrade" });
CertificateInscription.belongsTo(Estudiante, { as: "certificateInscriptionAsEstudiante", foreignKey: "idEstudiante" });


CoursesInscription.belongsTo(Estudiante, { as: "coursesInscriptionAsEstudiante", foreignKey: "idEstudiante" });
CoursesInscription.belongsTo(Course, { as: "coursesInscriptionAsCourse", foreignKey: "idCourse" });
TechnicalInscription.belongsTo(Estudiante, { as: "technicalInscriptionAsEstudiante", foreignKey: "idEstudiante" });
TechnicalInscription.belongsTo(Technical, { as: "technicalInscriptionAsTechnical", foreignKey: "idTechnical" });
ExtracurricularInscription.belongsTo(Estudiante, { as: "extracurricularInscriptionAsEstudiante", foreignKey: "idEstudiante" });
ExtracurricularInscription.belongsTo(Extracurricular, { as: "extracurricularInscriptionAsExtracurricular", foreignKey: "idExtracurricular" });

PensionesMeses.belongsTo(Acudiente, { as: "pensionesMesesAsEstudiante", foreignKey: "idAcudiente" });
MatriculasPagos.belongsTo(Acudiente, { as: "matriculasPagosAsEstudiante", foreignKey: "idAcudiente" });
Estudiante.belongsTo(Grade,{as: "estudianteAsGrade", foreignKey:'idGrade'})
// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.belongsTo(Role, { as: "userAsRole", foreignKey: "idRole" });
User.belongsTo(Acudiente, { as: "userAsAcudiente", foreignKey: "idAcudiente" });
// Añade una clave userId a la tabla addresses
Role.hasMany(User, { as: "rolesAsUser", foreignKey: "idRole" });

recoverPassword.belongsTo(User, { as: "recoverPasswordAsUser", foreignKey: "idUser" });
User.hasMany(recoverPassword, { as: "userAsrecoverPassword", foreignKey: "idUser" });

Inscription.belongsTo(User, { as: "inscriptionAsUser", foreignKey: "idUser" });
User.hasMany(Inscription, { as: "userAsInscriptionAsUser", foreignKey: "idUser" });


Inscription.belongsTo(Period, { as: "inscriptionAsPeriod", foreignKey: "idPeriod" });
Period.hasMany(Inscription, { as: "periodAsInscriptionAsUser", foreignKey: "idPeriod" });


TuitionType.belongsTo(Grade, { as: "matriculaAsGrade", foreignKey: "idGrade" });
/*Grade.hasMany(TuitionType, { as: "gradesAsTuitionType", foreignKey: "idGrade" });*/


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

Leveling.belongsTo(Estudiante, { as: "levelingAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(Leveling, { as: "estudianteAsLeveling", foreignKey: "idEstudiante" });

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

Responsable.belongsTo(Estudiante, { as: "responsableAsEstudiante", foreignKey: "idEstudiante" });
Estudiante.hasMany(Responsable, { as: "estudianteAsResponsable", foreignKey: "idEstudiante" });