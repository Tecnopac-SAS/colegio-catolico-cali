const {Router} = require('express');
const router = Router();
const TransportationRequestCtrl = require('../controllers/transportation-request.controller');

router.get('/listarTransportationsRequests',TransportationRequestCtrl.consultarTransportationsRequests);
router.get('/listarTransportationsRequest/:id',TransportationRequestCtrl.consultarTransportationRequest);
router.get('/listarTransportationsRequests/:estudianteid/:acudienteid' ,TransportationRequestCtrl.consultarTransportationByStudentRequest);
router.put('/aprobarSolicitud/:id' ,TransportationRequestCtrl.aprobarSolicitud);
router.post('/crearTransportationRequest',TransportationRequestCtrl.crearTransportationRequest);





module.exports= router