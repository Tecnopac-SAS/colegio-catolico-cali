const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');

router.post('/crearSoportePago',SoportePagosCtrl.crearSoportePago);
router.get('/listarMisSoportesPagos/:idAcudiente',SoportePagosCtrl.listarMisSoportesPagos);
router.get('/listarMisSoportesPagosSearch/:dato/:id',SoportePagosCtrl.listarMisSoportesPagosSearch);



module.exports= router