const {Router} = require('express');
const router = Router();
const acudienteCtrl = require('../controllers/acudiente.controller');
const {check} = require("express-validator");

router.post('/descBolsillo',acudienteCtrl.descuentoBolsillo);
router.post('/addBolsillo',
    [
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente "),
        check('cant').notEmpty().withMessage("Ingresa el campo de cant")
    ],acudienteCtrl.actualizarBolsillo);
router.post('/getBolsillo',[
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente")
],acudienteCtrl.getBolsillo);
router.get('/getAcudiente',
    [
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente")
    ],acudienteCtrl.getAcudiente);
router.post('/getAcudientebyEstudiante',
    [
        check('idEstudiante').notEmpty().withMessage("Ingrese el campo de idEstudiante"),
    ],acudienteCtrl.getAcudientebyEstudiante);
router.post('/actualizarAcudiente',[
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente "),
        check('nombres').notEmpty().withMessage("Ingrese el campo de nombres"),
        check('apellidos').notEmpty().withMessage("Ingrese el campo de apellidos"),
        check('cargo').notEmpty().withMessage("Ingresa el campo de cargo "),
        check('celular').notEmpty().withMessage("Ingresa el campo de celular"),
        check('correoElectronico').notEmpty().withMessage("Ingresa el campo correoElectronico"),
        check('direccion').notEmpty().withMessage("Ingresa el campo de direccion"),
        check('dondeTrabaja').notEmpty().withMessage("Ingresa el campo de dondeTrabaja"),
        check('identificacion').notEmpty().withMessage("Ingresa el campo de identification"),
        check('ingresoMensual').notEmpty().withMessage("Ingresa el campo de ingresoMensual"),
        check('parentesco').notEmpty().withMessage("Ingresa el campo parentesco"),
        check('profesion').notEmpty().withMessage("Ingresa el campo profesion"),
        check('telefono').notEmpty().withMessage("Ingresa el campo tipoDocumento")
    ],
    acudienteCtrl.actualizarAcudiente);




module.exports= router