const {Router} = require('express');
const router = Router();
const TransportationRequestCtrl = require('../controllers/transportation-request.controller');
const {check} = require("express-validator");

router.get('/listarTransportationsRequests',TransportationRequestCtrl.consultarTransportationsRequests);
router.get('/listarTransportationsRequest/:id',TransportationRequestCtrl.consultarTransportationRequest);
router.get('/listarTransportationsRequests/:estudianteid/:acudienteid' ,TransportationRequestCtrl.consultarTransportationByStudentRequest);
router.put('/aprobarSolicitud/:id',[
    check('estado').notEmpty().withMessage("Ingresa ele campo estado"),
    check('routeid').notEmpty().withMessage("Ingresa ele campo routeid")
],TransportationRequestCtrl.aprobarSolicitud);
router.post('/crearTransportationRequest',[
    check('routeid').notEmpty().withMessage("Ingresa ele campo routeid"),
    check('acudienteid').notEmpty().withMessage("Ingresa ele campo acudienteid"),
    check('estado').notEmpty().withMessage("Ingresa ele campo estado"),
    check('routeType').notEmpty().withMessage("Ingresa ele campo routeType"),
    check('datosResponsable').notEmpty().withMessage("Ingresa ele campo datosResponsable"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa ele campo direccion_recogida"),
    check('direccion_entrega').notEmpty().withMessage("Ingresa ele campo direccion_entrega"),
],TransportationRequestCtrl.crearTransportationRequest);





module.exports= router