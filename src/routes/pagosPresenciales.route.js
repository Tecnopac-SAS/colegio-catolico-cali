const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pagosPresenciales.controller');

router.get('/list',PensionCtrl.consultarPagosPresenciales);
router.post('/pagar',PensionCtrl.crearPagoPresencial);



module.exports= router