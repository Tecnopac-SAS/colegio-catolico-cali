const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pensionPago.controller');
const {check} = require("express-validator");

router.post('/list',[
    check("idAcudiente").notEmpty().withMessage("Ingresa el campo idAcudiente")
],PensionCtrl.consultarPensiones);
router.post('/pagar/:tipo',[
    check("pensiones").notEmpty().withMessage("Ingresa el campo pensiones")
],PensionCtrl.pagarPensiones);





module.exports= router