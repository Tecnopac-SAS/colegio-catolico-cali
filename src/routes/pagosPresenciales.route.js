const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pagosPresenciales.controller');
const {check} = require("express-validator");

router.get('/list',PensionCtrl.consultarPagosPresenciales);
router.post('/pagar',[
    check("paymentCode").notEmpty().withMessage("Ingresa el campo paymentCode"),
    check("servicio").notEmpty().withMessage("Ingresa el campo servicio"),
    check("observacion").notEmpty().withMessage("Ingresa el campo observacion"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("monto").notEmpty().withMessage("Ingresa el campo monto")
],PensionCtrl.crearPagoPresencial);
router.put('/:id',[
    check("paymentCode").notEmpty().withMessage("Ingresa el campo paymentCode"),
    check("servicio").notEmpty().withMessage("Ingresa el campo servicio"),
    check("observacion").notEmpty().withMessage("Ingresa el campo observacion"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado")
],PensionCtrl.updatePagoPresencial);
router.put('/status/:id',[
    check("estado").notEmpty().withMessage("Ingresa el campo estado")
],PensionCtrl.updateStatusPagoPresencial);

module.exports= router