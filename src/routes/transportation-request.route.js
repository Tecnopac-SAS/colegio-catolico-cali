const {Router} = require('express');
const router = Router();
const TransportationRequestCtrl = require('../controllers/transportation-request.controller');

router.get('/listarTransportationsRequests',TransportationRequestCtrl.consultarTransportationsRequest);
router.put('/aprobarCupo/:id' ,TransportationRequestCtrl.aprobarCupo);
router.post('/crearTransportationRequest',TransportationRequestCtrl.crearTransportationRequest);
// router.get('/listarTransportation/:routeName',TransportationCtrl.consultarTransportation);
// router.get('/listarTransportationId/:id',TransportationCtrl.consultarId);
// router.put('/actualizarTransportation/:id',TransportationCtrl.actualizarTransportation)





module.exports= router