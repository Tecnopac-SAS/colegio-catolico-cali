const {Router} = require('express');
const router = Router();
const PadreFamiliaCtrl = require('../controllers/padreFamilia.controller');
const {check} = require("express-validator");


router.get('/listarPadreFamilia',PadreFamiliaCtrl.consultarPadreFamilia);
router.post('/crearPadreFamilia',PadreFamiliaCtrl.crearPadreFamilia);
router.post('/crearMadreFamilia',PadreFamiliaCtrl.crearMadreFamilia);
router.post('/crearAcudiente',[
    check('parentesco').notEmpty().withMessage('Ingrese el campo de parentesco'),
    check('estado').notEmpty().withMessage('Ingrese el campo de estado'),
    check('tipoDocumento').notEmpty().withMessage('Ingrese el campo de tipoDocumento'),
    check('identificacion').notEmpty().withMessage('Ingrese el campo de identificacion'),
    check('nombres').notEmpty().withMessage('Ingrese el campo de nombres'),
    check('apellidos').notEmpty().withMessage('Ingrese el campo de apellidos'),
    check('profesion').notEmpty().withMessage('Ingrese el campo de profesion'),
    check('dondeTrabaja').notEmpty().withMessage('Ingrese el campo de dondeTrabaja'),
    check('cargo').notEmpty().withMessage('Ingrese el campo de cargo'),
    check('ingresoMensual').notEmpty().withMessage('Ingrese el campo de ingresoMensual'),
    check('correoElectronico').notEmpty().withMessage('Ingrese el campo de correoElectronico'),
    check('direccion').notEmpty().withMessage('Ingrese el campo de direccion'),
    check('telefono').notEmpty().withMessage('Ingrese el campo de telefono'),
    check('celular').notEmpty().withMessage('Ingrese el campo de celular'),
    check('idEstudiante').notEmpty().withMessage('Ingrese el campo de idEstudiante')
],PadreFamiliaCtrl.crearAcudiente);
router.post('/crearResponsable',[
    check('tipoPersona').notEmpty().withMessage("Ingrese el campo tipoPersona"),
    check('razonSocial').notEmpty().withMessage("Ingrese el campo razonSocial"),
    check('tipoDocumento').notEmpty().withMessage("Ingrese el campo tipoDocumento"),
    check('identificacion').notEmpty().withMessage("Ingrese el campo identificacion"),
    check('direccion').notEmpty().withMessage("Ingrese el campo direccion"),
    check('pais').notEmpty().withMessage("Ingrese el campo pais"),
    check('departamento').notEmpty().withMessage("Ingrese el campo departamento"),
    check('ciudad').notEmpty().withMessage("Ingresa el campo ciudad"),
    check('correoElectronico').notEmpty().withMessage("Ingresa el campo correoElectronico"),
    check('celular').notEmpty().withMessage("Ingresa el campo celular"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante"),
    check('responsable').notEmpty().withMessage("Ingresa el campo responsable")
],PadreFamiliaCtrl.crearResponsable);
router.get('/listarPadreFamiliaId/:id',PadreFamiliaCtrl.consultarId);
router.get('/getAllAcudiente/:id',PadreFamiliaCtrl.getAllAcudiente);
router.put('/actualizarPadreFamilia/:id',[
    check('estado').notEmpty().withMessage("Ingrese el campo estado"),
    check('vive').notEmpty().withMessage("Ingrese el campo vive"),
    check('tipoDocumento').notEmpty().withMessage("Ingrese el campo tipoDocumento"),
    check('identificacion').notEmpty().withMessage("Ingrese el campo identificacion"),
    check('nombres').notEmpty().withMessage("Ingrese el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingrese el campo apellidos"),
    check('profesion').notEmpty().withMessage("Ingrese el campo profesion"),
    check('dondeTrabaja').notEmpty().withMessage("Ingrese el campo dondeTrabaja"),
    check('cargo').notEmpty().withMessage("Ingrese el campo cargo"),
    check('ingresoMensual').notEmpty().withMessage("Ingrese el campo ingresoMensual"),
    check('correoElectronico').notEmpty().withMessage("Ingrese el campo correoElectronico"),
    check('direccion').notEmpty().withMessage("Ingrese el campo direccion"),
    check('telefono').notEmpty().withMessage("Ingrese el campo telefono"),
    check('celular').notEmpty().withMessage("Ingrese el campo celular")
],PadreFamiliaCtrl.actualizarPadreFamilia)
router.put('/actualizarAcudiente/:id',PadreFamiliaCtrl.actualizarAcudiente)
router.put('/deshabilitar/:id' ,PadreFamiliaCtrl.deshabilitar)




module.exports= router