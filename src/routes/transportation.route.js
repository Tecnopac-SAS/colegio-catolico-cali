const {Router} = require('express');
const router = Router();
const TransportationCtrl = require('../controllers/transportation.controller');
const {check} = require("express-validator");

router.get('/listarTransportations',TransportationCtrl.consultarTransportationsAll);
router.get('/listarTransportations/:jornada',TransportationCtrl.consultarTransportations);
router.get('/listarTransportation/:routeName',TransportationCtrl.consultarTransportation);
router.get('/listarTransportationId/:id',TransportationCtrl.consultarId);
router.post('/crearTransportation',
    check('routeName').notEmpty().withMessage("Ingresa el campo routeName"),
    check('routeNumber').notEmpty().withMessage("Ingresa el campo routeNumber"),
    check('responsible').notEmpty().withMessage("Ingresa el campo responsible"),
    check('direccion_entrega').notEmpty().withMessage("Ingresa el campo direccion_entrega"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa el campo direccion_recogida"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('descripcion').notEmpty().withMessage("Ingresa el campo descripcion"),
    check('routeType').notEmpty().withMessage("Ingresa el campo routeType"),
    check('price').notEmpty().withMessage("Ingresa el campo price"),
    check('cupo').notEmpty().withMessage("Ingresa el campo cupo"),
    check('cupo').notEmpty().withMessage("Ingresa el campo cupo_disponible")
    ,TransportationCtrl.crearTransportation);
router.put('/actualizarTransportation/:id',[
    check('routeName').notEmpty().withMessage("Ingresa el campo routeName"),
    check('routeNumber').notEmpty().withMessage("Ingresa el campo routeNumber"),
    check('responsible').notEmpty().withMessage("Ingresa el campo responsible"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa el campo direccion_recogida"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('descripcion').notEmpty().withMessage("Ingresa el campo descripcion"),
    check('routeType').notEmpty().withMessage("Ingresa el campo routeType"),
    check('price').notEmpty().withMessage("Ingresa el campo price")
],TransportationCtrl.actualizarTransportation)
router.put('/deshabilitar/:id',[
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa opciones true o false")
],TransportationCtrl.deshabilitar)





module.exports= router