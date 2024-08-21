const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');
const {check} = require("express-validator");

router.post('/crearSoportePago',[
    check('paymentCode').notEmpty().withMessage("Ingresa el campo paymentCode"),
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente"),
    check("monto").notEmpty().withMessage("Ingresa el campo monto"),
    check("viaPago").notEmpty().withMessage("Ingresa el campo viaPago"),
    check("tipoPago").notEmpty().withMessage("Ingresa el campo tipoPago")
],SoportePagosCtrl.crearSoportePago);
router.get('/listarMisSoportesPagos/:idAcudiente',SoportePagosCtrl.listarMisSoportesPagos);
router.get('/listarSoportesPagos',SoportePagosCtrl.listarSoportesPagos);

module.exports= router