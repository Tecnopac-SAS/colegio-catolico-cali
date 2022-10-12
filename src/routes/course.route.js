const {Router} = require('express');
const router = Router();
const CourseCtrl = require('../controllers/courses.controller');

router.get('/listarCourses',CourseCtrl.consultarCourses);
router.get('/listarCourse/:description',CourseCtrl.consultarCourse);
router.post('/crearCourse',CourseCtrl.crearCourse);
router.put('/actualizarCourse/:id',CourseCtrl.actualizarCourse)





module.exports= router