const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');

router.get('/listarMisSoportesPagos/:id',SoportePagosCtrl.listarMisSoportesPagos);
router.get('/listarMisSoportesPagosSearch/:dato/:id',SoportePagosCtrl.listarMisSoportesPagosSearch);



module.exports= router