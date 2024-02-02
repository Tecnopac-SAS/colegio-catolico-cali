const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');

router.post('/crearSoportePago',SoportePagosCtrl.crearSoportePago);
router.get('/listarMisSoportesPagos/:idAcudiente',SoportePagosCtrl.listarMisSoportesPagos);

module.exports= router