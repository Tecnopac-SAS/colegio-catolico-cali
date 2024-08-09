const {Router} = require('express');
const router = Router();
const TeacherCtrl = require('../controllers/teacher.controller');
const {check} = require("express-validator");

router.get('/listarTeachers',TeacherCtrl.consultarTeachers);
router.get('/listarTeacher/:name',TeacherCtrl.consultarTeacher);
router.get('/listarTeacherId/:id',TeacherCtrl.consultarId);
router.post('/crearTeacher',
    [
        check("name").notEmpty().withMessage("Ingresa el campo name"),
        check("course").notEmpty().withMessage("Ingresa el campo course"),
        check("email").notEmpty().withMessage("Ingresa el campo email"),
        check("number").notEmpty().withMessage("Ingresa el campo number")
        //name,course,email,number
    ],TeacherCtrl.crearTeacher);
router.put('/actualizarTeacher/:id',[
    check("name").notEmpty().withMessage("Ingresa el campo name"),
    check("course").notEmpty().withMessage("Ingresa el campo course"),
    check("email").notEmpty().withMessage("Ingresa el campo email"),
    check("number").notEmpty().withMessage("Ingresa el campo number")
],TeacherCtrl.actualizarTeacher)
router.put('/deshabilitar/:id' ,[
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive")
],TeacherCtrl.deshabilitar)





module.exports= router