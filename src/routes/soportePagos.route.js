const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');

router.post('/crearSoportePago',SoportePagosCtrl.crearSoportePago);
router.get('/listarMisSoportesPagos/:idAcudiente',SoportePagosCtrl.listarMisSoportesPagos);
router.get('/listarSoportesPagos',SoportePagosCtrl.listarSoportesPagos);

module.exports= router