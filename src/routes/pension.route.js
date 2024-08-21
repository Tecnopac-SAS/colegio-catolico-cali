const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pension.controller');
const {check} = require("express-validator");

router.get('/listarPensiones', PensionCtrl.consultarPensiones);
router.get('/listarPension/:idGrade', PensionCtrl.consultarPension);
router.get('/listarPensionId/:id', PensionCtrl.consultarId);
router.post('/crearPension', [
    check("price").notEmpty().withMessage("Ingresa el campo price"),
    check("discount").notEmpty().withMessage("Ingresa el campo discount"),
    check("use").notEmpty().withMessage("Ingresa el campo use"),
    check("idGrade").notEmpty().withMessage("Ingresa el campo idGrade"),
    check("interes").notEmpty().withMessage("Ingresa el campo interes")
], PensionCtrl.crearPension);
router.put('/actualizarPension/:id',
    [
        check("price").notEmpty().withMessage("Ingresa el campo price"),
        check("discount").notEmpty().withMessage("Ingresa el campo discount"),
        check("idGrade").notEmpty().withMessage("Ingresa el campo idGrade")
    ], PensionCtrl.actualizarPension)
router.put('/deshabilitar/:id', [
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive")
], PensionCtrl.deshabilitar)


module.exports = router