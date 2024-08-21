const {Router} = require('express');
const router = Router();
const TechnicalCtrl = require('../controllers/technical.controller');
const {check} = require("express-validator");

router.get('/listarTechnicals',TechnicalCtrl.consultarTechnicals);
router.get('/listarTechnical/:course',TechnicalCtrl.consultarTechnical);
router.get('/listarTechnicalId/:id',TechnicalCtrl.consultarId);
router.post('/crearTechnical',
    [
        check('course').notEmpty().withMessage("Ingrese el campo  course"),
        check('startDate').notEmpty().withMessage("Ingrese el campo startDate"),
        check('finalDate').notEmpty().withMessage("Ingrese el campo finalDate"),
        check('price').notEmpty().withMessage("Ingrese el campo price"),
        check('idTeacher').notEmpty().withMessage("Ingrese el campo idTeacher"),
        check('startHour').notEmpty().withMessage("Ingrese el campo startHour"),
        check('finalHour').notEmpty().withMessage("Ingrese el campo finalHour"),
        check('description').notEmpty().withMessage("Ingrese el campo description")
    ]
    ,TechnicalCtrl.crearTechnical);
router.put('/actualizarTechnical/:id',
    [
        check('course').notEmpty().withMessage("Ingrese el campo  course"),
        check('startDate').notEmpty().withMessage("Ingrese el campo startDate"),
        check('finalDate').notEmpty().withMessage("Ingrese el campo finalDate"),
        check('price').notEmpty().withMessage("Ingrese el campo price"),
        check('idTeacher').notEmpty().withMessage("Ingrese el campo idTeacher"),
        check('startHour').notEmpty().withMessage("Ingrese el campo startHour"),
        check('finalHour').notEmpty().withMessage("Ingrese el campo finalHour"),
        check('description').notEmpty().withMessage("Ingrese el campo description")
    ],TechnicalCtrl.actualizarTechnical)
router.put('/deshabilitar/:id' ,
    check('isActive').notEmpty().withMessage('Ingrese el campo isActive').bail().isBoolean().withMessage("Opciones true o false")
    ,TechnicalCtrl.deshabilitar)
router.post('/pago',[
    check('monto').notEmpty().withMessage('Ingrese el campo monto'),
    check('idTechnical').notEmpty().withMessage('Ingrese el campo idTechnical'),
    check('metodoPago').notEmpty().withMessage('Ingrese el campo metodoPago'),
    check('idEstudiante').notEmpty().withMessage('Ingrese el campo idEstudiante')
],TechnicalCtrl.pago);





module.exports= router