const {Router} = require('express');
const router = Router();
const TeacherCtrl = require('../controllers/teacher.controller');

router.get('/listarTeachers',TeacherCtrl.consultarTeachers);
router.get('/listarTeacher/:name',TeacherCtrl.consultarTeacher);
router.get('/listarTeacherId/:id',TeacherCtrl.consultarId);
router.post('/crearTeacher',TeacherCtrl.crearTeacher);
router.put('/actualizarTeacher/:id',TeacherCtrl.actualizarTeacher)
router.put('/deshabilitar/:id' ,TeacherCtrl.deshabilitar)





module.exports= router