const {Router} = require('express');
const router = Router();
const TransportationCtrl = require('../controllers/transportation.controller');

router.get('/listarTransportations/:jornada',TransportationCtrl.consultarTransportations);
router.get('/listarTransportation/:routeName',TransportationCtrl.consultarTransportation);
router.get('/listarTransportationId/:id',TransportationCtrl.consultarId);
router.post('/crearTransportation',TransportationCtrl.crearTransportation);
router.put('/actualizarTransportation/:id',TransportationCtrl.actualizarTransportation)
router.put('/deshabilitar/:id' ,TransportationCtrl.deshabilitar)





module.exports= router