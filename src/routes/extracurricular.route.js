const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');
const uploadCtrl = require('../controllers/upload.controller');
const {check} = require("express-validator");


router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);
router.post('/crearExtracurricular',[
    check('activity').notEmpty().withMessage("Ingresa el campo acitivity"),
    check('startDate').notEmpty().withMessage("Ingresa el campo startDate"),
    check('finalDate').notEmpty().withMessage("Ingreasa el campo finalDate"),
    check('price').notEmpty().withMessage("Ingresa el campo price"),
    check('information').optional(),
    check('schedule').optional(),
    check('idTeacher').notEmpty().withMessage("Ingresa el campo idTeacher"),
    check('imagen').notEmpty().withMessage("Ingresa el campo imagen")
],extracurricularCtrl.crearExtracurricular);
router.post('/pago',
    check('monto').notEmpty().withMessage("Ingresa el campo monto"),
    check('idExtracurricular').notEmpty().withMessage("Ingresa el campo idExtracurricular"),
    check('metodoPago').notEmpty().withMessage("Ingresa el campo metodoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante"),
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("El campo es true o false")
    ,extracurricularCtrl.pago);
router.post('/misExtracurriculares',
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
    ,
    extracurricularCtrl.misExtracurriculares);
router.get('/listarExtracurricularId/:id',extracurricularCtrl.consultarId);
router.put('/actualizarExtracurricular/:id',extracurricularCtrl.actualizarExtracurricular)
router.put('/deshabilitar/:id' ,extracurricularCtrl.deshabilitar)
router.put('/desvincularse/:id' ,extracurricularCtrl.desvincularse)




module.exports= router