const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pensionPago.controller');

router.post('/list',PensionCtrl.consultarPensiones);





module.exports= router