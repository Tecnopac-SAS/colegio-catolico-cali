const {Router} = require('express');
const router = Router();
const cafeteriaPagosCtrl = require('../controllers/cafeteriaPagos.controller');


router.post('/crearPago',cafeteriaPagosCtrl.crearPago);
router.post('/getPagos',cafeteriaPagosCtrl.getPagos);





module.exports= router
