const {Router} = require('express');
const router = Router();
const TransportationRequestCtrl = require('../controllers/transportation-request.controller');

router.get('/listarTransportationsRequests',TransportationRequestCtrl.consultarTransportationsRequest);
router.get('/listarTransportationsRequests/:estudianteid/:acudienteid' ,TransportationRequestCtrl.consultarTransportationByStudentRequest);
router.put('/aprobarCupo/:id' ,TransportationRequestCtrl.aprobarCupo);
router.post('/crearTransportationRequest',TransportationRequestCtrl.crearTransportationRequest);





module.exports= router