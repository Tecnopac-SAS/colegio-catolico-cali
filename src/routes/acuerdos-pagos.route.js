const {Router} = require('express');
const router = Router();
const AcuerdosPagosCtrl = require('../controllers/acuerdos-pago.controller');
const {check} = require("express-validator");

router.get('/listarAcuerdosPagos',AcuerdosPagosCtrl.consultarAcuerdosPagos);
router.get('/listarAcuerdoPagoCuotas/:id',AcuerdosPagosCtrl.consultarAcuerdosPagosCuotas);
router.get('/listarAcuerdoPago/:id',AcuerdosPagosCtrl.consultarAcuerdoPago);
router.get('/listarAcuerdoPagoByAcudiente/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoByAcudiente);
router.get('/listarMatriculaAndPensionValue/:id',AcuerdosPagosCtrl.consultarMatriculaAndPensionValue);
router.put('/AcuerdoPago/:id',AcuerdosPagosCtrl.editarAcuerdoPago);
router.post('/AcuerdoPago',
    [
        check("fecha").notEmpty().withMessage("Ingresar campo de fecha"),
        check("description").notEmpty().withMessage("Ingresa campo de description"),
        check("valor").notEmpty().withMessage("Ingresa campo de valor"),
        check("estado").notEmpty().withMessage("Ingresa el campo de estado"),
        check("idAcudiente").notEmpty().withMessage("Ingresa el campo de idAcudiente"),
        check("cuotas").notEmpty().withMessage("Ingresa el campo de cuotas")
    ]
    ,AcuerdosPagosCtrl.crearAcuerdoPago);
router.get('/AcuerdoPagoSearch/:dato/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoSearch);

module.exports= router