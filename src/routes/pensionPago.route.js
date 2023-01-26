const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pensionPago.controller');

router.post('/list',PensionCtrl.consultarPensiones);
router.post('/pagar',PensionCtrl.pagarPensiones);





module.exports= router