const {Router} = require('express');
const router = Router();
const tuitionTypeCtrl = require('../controllers/tuitionType.controller');
const {check} = require("express-validator");

router.get('/listarTuitionTypes',tuitionTypeCtrl.consultarTuitionType);
router.get('/listarTuition/:description',tuitionTypeCtrl.consultarTuition);
router.get('/listarTuitionId/:id',tuitionTypeCtrl.consultarId);
router.post('/CrearTuitionType',[
    check('grade').notEmpty().withMessage('Ingresa el campo grade'),
    check('startDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('orginary_price').notEmpty().withMessage('Ingresa el campo ordinary_price'),
    check('extraordinary_startDate').notEmpty().withMessage('Ingresa el campo extraordinary_startDate'),
    check('extraordinary_finalDate').notEmpty().withMessage('Ingresa el campo extraordinary_finalDate'),
    check('extraordinary_price').notEmpty().withMessage('Ingresa el campo extraordinary_price')
],tuitionTypeCtrl.crearTuitionType);
router.put('/actualizarTuition/:id',[
    check('grade').notEmpty().withMessage('Ingresa el campo grade'),
    check('startDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('orginary_price').notEmpty().withMessage('Ingresa el campo ordinary_price'),
    check('extraordinary_startDate').notEmpty().withMessage('Ingresa el campo extraordinary_startDate'),
    check('extraordinary_finalDate').notEmpty().withMessage('Ingresa el campo extraordinary_finalDate'),
    check('extraordinary_price').notEmpty().withMessage('Ingresa el campo extraordinary_price')
],tuitionTypeCtrl.actualizarTuition)
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage('Ingresa el campo isActive')
],tuitionTypeCtrl.deshabilitar)




module.exports= router