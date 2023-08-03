//requerir las dependencias necesarias
require('dotenv').config()
const config = require('./config')
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const userModel = require('.//src/models/user.model')
const roleModel = require('.//src/models/role.model')
const periodModel = require('./src/models/period.model')
const inscriptionModel = require('./src/models/inscription.model')
const gradesModel = require('./src/models/grade.model')
const tuitionModel = require('./src/models/tuition.model')
const tuitionTypeModel = require('./src/models/tuitionType.model')
const extracurricularModel = require('./src/models/extracurricular.model')
const pensionModel = require('./src/models/pension.model')
const courseModel = require('./src/models/courses.model')
const transportationModel = require('./src/models/transportation.model')
const transportationRequestModel = require('./src/models/transportation-request.model')
const cafeteriaModel = require('./src/models/cafeteria.model')
const discountModel = require('./src/models/discount.model')
const certificateModel = require('./src/models/certificates.model')
const technicalModel = require('./src/models/technical.model')
const documentosMatriculaModel = require('./src/models/documentosMatricula.model')
const schoolYearModel = require('./src/models/schoolYear.model')
const recoverPasswordModel = require('./src/models/recoverPassword.model')
const attendingManagementsModel = require('./src/models/attendingManagement.model')
const teacherModel = require('./src/models/teacher.model')
const studentDatabaseModel = require('./src/models/studentDatabase.model')
const levelingModel = require('./src/models/leveling.model')
const historialAcademicoModel = require('./src/models/historialAcademico.model')
const aptitudesModel = require('./src/models/aptitudesEstadoFisico.model')
const padreFamiliaModel = require('./src/models/padreFamilia.model')
const acudienteModel = require('./src/models/acudiente.model')
const responsableModel = require('./src/models/responsableFacturacion.model')
const hermanoModel = require('./src/models/hermanos.model')
const canalReferenciaModel = require('./src/models/canalReferencia.model')
const pensionesMeses = require('./src/models/pensionMeses.model')
const matriculasPagos = require('./src/models/matriculasPagos.model')
const histPreescolar = require('./src/models/histPreescolar.model')
const histPrimaria = require('./src/models/histPrimaria.model')
const histBachillerato = require('./src/models/histBachillerato.model')
const coursesInscription = require('./src/models/coursesInscription.model')
const technicalInscription = require('./src/models/technicalInscription.model')
const extracurricularInscription = require('./src/models/extracurricularInscription.model')
const cafeteriaPagosModel = require('./src/models/cafeteriaPagos.model')


const bdSq = require('./src/db/databaseSq')
const Sequelize = require('sequelize');
const CertificateInscription = require('./src/models/certificateInscription.model');
const PagosPresenciales = require('./src/models/pagosPresenciales.model');
const transportationRequestCtrl = require('./src/controllers/transportation-request.controller');
require('./src/models/asociations');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: '*' }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'src/uploads')));
//Rutas
app.use('/user', require('./src/routes/user.route'))
app.use('/role', require('./src/routes/role.route'))
app.use('/inscription', require('./src/routes/inscription.route'))
app.use('/period', require('./src/routes/period.route'))
app.use('/grades', require('./src/routes/grades.route'))
app.use('/tuition', require('./src/routes/tuition.route'))
app.use('/tuitionType', require('./src/routes/tuitionType.route'))
app.use('/extracurricular', require('./src/routes/extracurricular.route'))
app.use('/pension', require('./src/routes/pension.route'))
app.use('/course', require('./src/routes/course.route'))
app.use('/transportation', require('./src/routes/transportation.route'))
app.use('/transportationRequest', require('./src/routes/transportation-request.route'))
app.use('/cafeteria', require('./src/routes/cafeteria.route'))
app.use('/discount', require('./src/routes/discount.route'))
app.use('/certificate', require('./src/routes/certificate.route'))
app.use('/technical', require('./src/routes/technical.route'))
app.use('/documentosMatricula', require('./src/routes/documentosMatricula.route'))
app.use('/schoolYear', require('./src/routes/schoolYear.route'))
app.use('/attendingManagements', require('./src/routes/attendingManagements.route'))
app.use('/teacher', require('./src/routes/teacher.router'))
app.use('/studentDatabase', require('./src/routes/studentDatabase.route'))
app.use('/leveling', require('./src/routes/leveling.route'))
app.use('/historialAcademico', require('./src/routes/historialAcademico.route'))
app.use('/aptitudes', require('./src/routes/aptitudes.route'))
app.use('/padres-familia', require('./src/routes/padreFamilia.route'))
app.use('/hermanos', require('./src/routes/hermanos.route'))
app.use('/canalReferencia', require('./src/routes/canalReferencia.route'))
app.use('/acudiente', require('./src/routes/acudiente.route'))
app.use('/pagoMatricula', require('./src/routes/pagoMatricula.route'))
app.use('/pago-pension', require('./src/routes/pensionPago.route'))
app.use('/soportePagos', require('./src/routes/soportePagos.route'))
app.use('/historicoCartera', require('./src/routes/historicoCartera.route'))
app.use('/cafeteriaPagos', require('./src/routes/cafeteriaPagos.route'))
app.use('/avalpay', require('./src/routes/avalpay.route'))
app.use('/downloads', require('./src/routes/downloads.route'))
app.use('/pagosPresenciales', require('./src/routes/pagosPresenciales.route'))



teacherModel.sync({ alter: true })


roleModel.sync({ alter: true })
userModel.sync({ alter: true })
recoverPasswordModel.sync({ alter: true })
periodModel.sync({ alter: true })
inscriptionModel.sync({ alter: true })

gradesModel.sync({ alter: true })
tuitionTypeModel.sync({ alter: true })
tuitionModel.sync({ alter: true })

extracurricularModel.sync({ alter: true })
pensionModel.sync({ alter: true })
courseModel.sync({ alter: true })

transportationModel.sync({ alter: true })
transportationRequestModel.sync({ alter: true })

cafeteriaModel.sync({ alter: true })

discountModel.sync({ alter: true })

certificateModel.sync({ alter: true })

technicalModel.sync({ alter: true })

documentosMatriculaModel.sync({ alter: true })

schoolYearModel.sync({ alter: true })
attendingManagementsModel.sync({ alter: true })
studentDatabaseModel.sync({ alter: true })


levelingModel.sync({ alter: true })

historialAcademicoModel.sync({ alter: true })
aptitudesModel.sync({ alter: true })

padreFamiliaModel.sync({ alter: true })
acudienteModel.sync({ alter: true })
responsableModel.sync({ alter: true })

hermanoModel.sync({ alter: true })

canalReferenciaModel.sync({ alter: true })

pensionesMeses.sync({ alter: true })
matriculasPagos.sync({ alter: true })
histPreescolar.sync({ alter: true })
histPrimaria.sync({ alter: true })
histBachillerato.sync({ alter: true })
coursesInscription.sync({ alter: true })
technicalInscription.sync({ alter: true })
extracurricularInscription.sync({ alter: true })
CertificateInscription.sync({ alter: true })
cafeteriaPagosModel.sync({ alter: true })

PagosPresenciales.sync({ alter: true })


app.listen(config.app.port || 3000, () => console.log(`listen on server: ${config.app.port}`));


console.log(process.env)

