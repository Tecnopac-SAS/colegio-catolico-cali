const {Router} = require('express');
const router = Router();
const aptitudesCtrl = require('../controllers/aptitudesEstadoFisico.controller');


router.get('/listarAptitudes',aptitudesCtrl.consultarAptitudes);
router.post('/crearAptitudes',aptitudesCtrl.crearAptitudes);
router.get('/listarAptitudesId/:id',aptitudesCtrl.consultarId);
router.put('/actualizarAptitudes/:id',aptitudesCtrl.actualizarAptitudes)
router.put('/deshabilitar/:id' ,aptitudesCtrl.deshabilitar)




module.exports= router