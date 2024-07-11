const {Router} = require('express');
const router = Router();
const AcuerdosPagosCtrl = require('../controllers/acuerdos-pago.controller');

router.get('/listarAcuerdosPagos',AcuerdosPagosCtrl.consultarAcuerdosPagos);
router.get('/listarAcuerdoPagoCuotas/:id',AcuerdosPagosCtrl.consultarAcuerdosPagosCuotas);
router.get('/listarAcuerdoPago/:id',AcuerdosPagosCtrl.consultarAcuerdoPago);
router.get('/listarAcuerdoPagoByAcudiente/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoByAcudiente);
router.get('/listarMatriculaAndPensionValue/:id',AcuerdosPagosCtrl.consultarMatriculaAndPensionValue);
router.put('/AcuerdoPago/:id',AcuerdosPagosCtrl.editarAcuerdoPago);
router.post('/AcuerdoPago',AcuerdosPagosCtrl.crearAcuerdoPago);
router.get('/AcuerdoPagoSearch/:dato/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoSearch);

module.exports= router