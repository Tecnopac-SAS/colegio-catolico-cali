const {Router} = require('express');
const router = Router();
const HermanoCtrl = require('../controllers/hermanos.controller');


router.get('/listarHermano',HermanoCtrl.consultarHermano);
router.post('/crearHermano',HermanoCtrl.crearHermanos);
router.get('/listarHermanoId/:id',HermanoCtrl.consultarId);
router.put('/actualizarHermano/:id',HermanoCtrl.actualizarhermano)
router.put('/deshabilitar/:id' ,HermanoCtrl.deshabilitar)




module.exports= router