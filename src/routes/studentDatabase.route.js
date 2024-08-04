const {Router} = require('express');
const router = Router();
const StudentDatabaseCtrl = require('../controllers/studentDatabase.controller');
const {check} = require("express-validator");

router.get('/listarStudentDatabases',StudentDatabaseCtrl.consultarStudentDatabases);
router.post('/get-pension',StudentDatabaseCtrl.getPension);
router.post('/get-matricula',StudentDatabaseCtrl.getMatricula);
router.get('/listarStudentDatabase/:nombres/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentDatabase);
router.get('/listarStudentDatabaseEstado/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentEstados);
router.get('/listarStudentDatabaseId/:id',StudentDatabaseCtrl.consultarId);
router.post('/crearStudentDatabase',
    [
        check('codigo').notEmpty().withMessage('Ingresa el campo codigo'),
        check('nombres').notEmpty().withMessage('Ingresa el campo nombres'),
        check('apellidos').notEmpty().withMessage('Ingresa el campo apellidos'),
        check('tipoDocumento').notEmpty().withMessage('Ingresa el campo tipoDocumento'),
        check('expedicion').notEmpty().withMessage('Ingresa el campo expedicion'),
        check('lugarNacimiento').notEmpty().withMessage('Ingresa el campo ligarNacimineto'),
        check('fechaNacimiento').notEmpty().withMessage('Ingresa el campo fechaNacimiento'),
        check('edad').notEmpty().withMessage('Ingresa el campo de edad'),
        check('direccion').notEmpty().withMessage('Ingresa el campo tipo direccion'),
        check('tipoDireccion').notEmpty().withMessage('Ingresa el campo tipoDireccion'),
        check('barrio').notEmpty().withMessage('Ingresa el campo barrio'),
        check('estrato').notEmpty().withMessage('Ingresa el campo estrato'),
        check('telefono').notEmpty().withMessage('Ingresa el campo telefono'),
        check('correo').notEmpty().withMessage('Ingresa el campo correo'),
        check('tipoCupo').notEmpty().withMessage('Ingresa el campo tipoCupo')
    ]
    ,StudentDatabaseCtrl.crearStudentDatabase);
router.put('/actualizarStudentDatabase/:id',[
        check('codigo').notEmpty().withMessage('Ingresa el campo codigo'),
        check('nombres').notEmpty().withMessage('Ingresa el campo nombres'),
        check('apellidos').notEmpty().withMessage('Ingresa el campo apellidos'),
        check('grado').notEmpty().withMessage('Ingresa el campo grado'),
        check('identificacion').notEmpty().withMessage('Ingresa el campo identificacion'),
        check('tipoDocumento').notEmpty().withMessage('Ingresa el campo tipoDocumento'),
        check('expedicion').notEmpty().withMessage('Ingresa el campo expedicion'),
        check('lugarNacimiento').notEmpty().withMessage('Ingresa el campo ligarNacimineto'),
        check('fechaNacimiento').notEmpty().withMessage('Ingresa el campo fechaNacimiento'),
        check('edad').notEmpty().withMessage('Ingresa el campo de edad'),
        check('direccion').notEmpty().withMessage('Ingresa el campo tipo direccion'),
        check('tipoDireccion').notEmpty().withMessage('Ingresa el campo tipoDireccion'),
        check('barrio').notEmpty().withMessage('Ingresa el campo barrio'),
        check('estrato').notEmpty().withMessage('Ingresa el campo estrato'),
        check('telefono').notEmpty().withMessage('Ingresa el campo telefono'),
        check('correo').notEmpty().withMessage('Ingresa el campo correo'),
        check('tipoCupo').notEmpty().withMessage('Ingresa el campo tipoCupo'),
        check('viveCon').notEmpty().withMessage('Ingresa el campo vivieCon'),
        check('idGrade').notEmpty().withMessage('Ingresa el campo idGrade')

],StudentDatabaseCtrl.actualizarStudentDatabase)
router.put('/deshabilitar/:id' ,StudentDatabaseCtrl.deshabilitar)
router.put('/cambiarEstado/:id' ,StudentDatabaseCtrl.cambiarEstado)
router.get('/contarEstado/:estadoEstudiante',StudentDatabaseCtrl.studentDatabaseCount);




module.exports= router