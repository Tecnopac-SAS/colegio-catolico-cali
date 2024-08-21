//requerir las dependencias necesarias
require('dotenv').config()
const swaggerDocs = require('./swagger');
const config = require('./config')
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


require('./src/models/asociations');

const markerFilePath = path.join(__dirname, 'db_sync_marker');

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
app.use('/deudas', require('./src/routes/deudas.route'))
app.use('/acuerdos-pagos', require('./src/routes/acuerdos-pagos.route'))
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
app.use('/documentos', require('./src/routes/documentos.route'))
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


const userModel = require('./src/models/user.model')
const roleModel = require('./src/models/role.model')
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
const acuerdosPago = require('./src/models/acuerdos-pago.model')
const acuerdosPagosCuotas = require('./src/models/acuerdos-pago-cuotas.model')
const certificateModel = require('./src/models/certificates.model')
const technicalModel = require('./src/models/technical.model')
const documentosMatriculaModel = require('./src/models/documentosMatricula.model')
const schoolYearModel = require('./src/models/schoolYear.model')
const recoverPasswordModel = require('./src/models/recoverPassword.model')
const attendingManagementsModel = require('./src/models/attendingManagement.model')
const teacherModel = require('./src/models/teacher.model')
const CertificateInscription = require('./src/models/certificateInscription.model');
const SoportesPago = require('./src/models/soportesPago.model');
const studentDatabaseModel = require('./src/models/studentDatabase.model')
const deudasModel = require('./src/models/deudas.model')
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
const documentos = require('./src/models/documentos.model');
const PagosPresenciales = require('./src/models/pagosPresenciales.model');

async function syncDatabase() {
    try {
        await extracurricularModel.sync({ alter: true })
        await tuitionModel.sync({ alter: true })
        await tuitionTypeModel.sync({ alter: true })
        await roleModel.sync({ alter: true })
        await acudienteModel.sync({ alter: true })
        await userModel.sync({ alter: true })
        await periodModel.sync({ alter: true })
        await documentos.sync({ alter: true })
        await gradesModel.sync({ alter: true })
        await teacherModel.sync({ alter: true })
        await studentDatabaseModel.sync({ alter: true })
        await inscriptionModel.sync({ alter: true })
        await recoverPasswordModel.sync({ alter: true })
        await discountModel.sync({ alter: true })
        await deudasModel.sync({ alter: true })
        await pensionModel.sync({ alter: true })
        await courseModel.sync({ alter: true })
        await transportationModel.sync({ alter: true })
        await transportationModel.sync({ alter: true })
        await transportationRequestModel.sync({ alter: true })
        await cafeteriaModel.sync({ alter: true })
        await acuerdosPago.sync({ alter: true })
        await acuerdosPagosCuotas.sync({ alter: true })
        await certificateModel.sync({ alter: true })
        await technicalModel.sync({ alter: true })
        await documentosMatriculaModel.sync({ alter: true })
        await schoolYearModel.sync({ alter: true })
        await attendingManagementsModel.sync({ alter: true })
        await levelingModel.sync({ alter: true })
        await historialAcademicoModel.sync({ alter: true })
        await aptitudesModel.sync({ alter: true })
        await padreFamiliaModel.sync({ alter: true })
        await responsableModel.sync({ alter: true })
        await hermanoModel.sync({ alter: true })
        await canalReferenciaModel.sync({ alter: true })
        await pensionesMeses.sync({ alter: true })
        await matriculasPagos.sync({ alter: true })
        await histPreescolar.sync({ alter: true })
        await histPrimaria.sync({ alter: true })
        await histBachillerato.sync({ alter: true })
        await coursesInscription.sync({ alter: true })
        await technicalInscription.sync({ alter: true })
        await extracurricularInscription.sync({ alter: true })
        await CertificateInscription.sync({ alter: true })
        await SoportesPago.sync({ alter: true })
        await PagosPresenciales.sync({ alter: true })
        await cafeteriaPagosModel.sync({ alter: true })
        fs.writeFileSync(markerFilePath, 'Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

if (!fs.existsSync(markerFilePath)) {
    syncDatabase().then(() => {
        console.log("Database synchronized");
    });
} else {
    console.log("Database already synchronized. Skipping sync.");
}

swaggerDocs(app, config.app.port || 3000);
app.listen(config.app.port || 3000, () => console.log(`listen on server: ${config.app.port}`));


console.log(process.env)

