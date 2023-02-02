const {Router} = require('express');
const router = Router();
const CourseCtrl = require('../controllers/courses.controller');

router.get('/listarCourses',CourseCtrl.consultarCourses);
router.get('/listarCourse/:typeCourse',CourseCtrl.consultarCourse);
router.get('/listarAsignature/:asignature',CourseCtrl.consultarAsignature);
router.get('/listarAsignatureId/:id',CourseCtrl.consultarId);
router.post('/crearCourse',CourseCtrl.crearCourse);
router.put('/actualizarCourse/:id',CourseCtrl.actualizarCourse)
router.put('/deshabilitar/:id' ,CourseCtrl.deshabilitar)
router.post('/pago',CourseCtrl.pago);





module.exports= router