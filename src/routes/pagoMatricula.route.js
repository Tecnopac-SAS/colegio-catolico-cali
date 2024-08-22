const {Router} = require('express');
const router = Router();
const pagoMatricula = require('../controllers/pagoMatricula.controller');
const {check} = require("express-validator");

router.post('/CrearPago',[
    check('monto').notEmpty().withMessage("Ingresa el campo monto"),
    check('metodoPago').notEmpty().withMessage("Ingresa el campo metodoPago"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente"),
    check('valMes').notEmpty().withMessage("Ingresa el campo valMes"),
    check('meses').notEmpty().withMessage("Ingresa el campo meses"),
    check('idPension').notEmpty().withMessage("Ingresa el campo idPension")
],pagoMatricula.crearPago);
router.post('/GetPago',[
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente")
],pagoMatricula.getPago);




module.exports= router