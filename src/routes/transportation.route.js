const {Router} = require('express');
const router = Router();
const TransportationCtrl = require('../controllers/transportation.controller');

router.get('/listarTransportations',TransportationCtrl.consultarTransportations);
router.get('/listarTransportation/:routeName',TransportationCtrl.consultarTransportation);
router.get('/listarTransportation/:id',TransportationCtrl.consultarId);
router.post('/crearTransportation',TransportationCtrl.crearTransportation);
router.put('/actualizarTransportation/:id',TransportationCtrl.actualizarTransportation)





module.exports= router