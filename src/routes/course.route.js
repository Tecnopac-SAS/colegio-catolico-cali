const {Router} = require('express');
const router = Router();
const CourseCtrl = require('../controllers/courses.controller');
const {check} = require("express-validator");

router.get('/listarCourses', CourseCtrl.consultarCourses);
router.get('/listarCourse/:typeCourse',CourseCtrl.consultarCourse);
router.get('/listarAsignature/:asignature',CourseCtrl.consultarAsignature);
router.get('/listarAsignatureId/:id',CourseCtrl.consultarId);
router.post('/crearCourse',[
    check('asignature').notEmpty().withMessage('Ingresa el campo asignature'),
    check('starDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('finalDate').notEmpty().withMessage('Ingresa el campo finalDate'),
    check('price').notEmpty().withMessage('Ingrese el campo price'),
    check('idTeacher').notEmpty().withMessage('Ingrese el campo idTeacher'),
    check('typeCourse').notEmpty().withMessage('Ingrese el campo typeCourse'),
    check('starHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('finalHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('description').notEmpty().withMessage('Ingrese el campo description')
],CourseCtrl.crearCourse);
router.put('/actualizarCourse/:id',[
    check('asignature').notEmpty().withMessage('Ingresa el campo asignature'),
    check('starDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('finalDate').notEmpty().withMessage('Ingresa el campo finalDate'),
    check('price').notEmpty().withMessage('Ingrese el campo price'),
    check('idTeacher').notEmpty().withMessage('Ingrese el campo idTeacher'),
    check('typeCourse').notEmpty().withMessage('Ingrese el campo typeCourse'),
    check('starHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('finalHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('description').notEmpty().withMessage('Ingrese el campo description')
],CourseCtrl.actualizarCourse)
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage("Ingrese el campo isActive")
],CourseCtrl.deshabilitar)
router.post('/pago',[
    check('monto').notEmpty().withMessage("Ingrese el campo monto"),
    check('idCourse').notEmpty().withMessage("Ingrese el campo idCourse"),
    check('metodoPago').notEmpty().withMessage("Ingrese el campo metodoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingrese el campo idEstudiante")
],CourseCtrl.pago);

module.exports= router