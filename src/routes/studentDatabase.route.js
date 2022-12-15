const {Router} = require('express');
const router = Router();
const StudentDatabaseCtrl = require('../controllers/studentDatabase.controller');

router.get('/listarStudentDatabases',StudentDatabaseCtrl.consultarStudentDatabases);
router.get('/listarStudentDatabase/:nombres/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentDatabase);
router.get('/listarStudentDatabaseEstado/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentEstados);
router.get('/listarStudentDatabaseId/:id',StudentDatabaseCtrl.consultarId);
router.post('/crearStudentDatabase',StudentDatabaseCtrl.crearStudentDatabase);
router.put('/actualizarStudentDatabase/:id',StudentDatabaseCtrl.actualizarStudentDatabase)
router.put('/deshabilitar/:id' ,StudentDatabaseCtrl.deshabilitar)
router.put('/cambiarEstado/:id' ,StudentDatabaseCtrl.cambiarEstado)
router.get('/contarEstado/:tipo',StudentDatabaseCtrl.studentDatabaseCount);




module.exports= router