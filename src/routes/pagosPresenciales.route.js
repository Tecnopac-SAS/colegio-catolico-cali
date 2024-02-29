const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pagosPresenciales.controller');

router.get('/list',PensionCtrl.consultarPagosPresenciales);
router.post('/pagar',PensionCtrl.crearPagoPresencial);
router.put('/:id',PensionCtrl.updatePagoPresencial);
router.put('/status/:id',PensionCtrl.updateStatusPagoPresencial);

module.exports= router