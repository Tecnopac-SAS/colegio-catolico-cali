const {Router} = require('express');
const router = Router();
const cafeteriaPagosCtrl = require('../controllers/cafeteriaPagos.controller');


router.post('/crearPago',cafeteriaPagosCtrl.crearPago);
router.get('/getPagos',cafeteriaPagosCtrl.getPagos);
router.get('/listPagoSearch/:dato',cafeteriaPagosCtrl.listPagoSearch);
router.get('/entregarTarjeta/:id',cafeteriaPagosCtrl.entregarTarjeta);





module.exports= router
