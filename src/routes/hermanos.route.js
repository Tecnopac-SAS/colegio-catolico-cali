const {Router} = require('express');
const router = Router();
const HermanoCtrl = require('../controllers/hermanos.controller');
const {check} = require("express-validator");


router.get('/listarHermano',HermanoCtrl.consultarHermano);
router.post('/crearHermano',[
    check('nombres').notEmpty().withMessage("Ingresa el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingresa el campo apellidos"),
    check('nivelEstudio').notEmpty().withMessage("Ingresa el campo nivelEstudio"),
    check('institucion').notEmpty().withMessage("Ingresa el campo institucion"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
],HermanoCtrl.crearHermanos);
router.get('/listarHermanoId/:id',HermanoCtrl.consultarId);
router.put('/actualizarHermano/:id',[
    check('nombres').notEmpty().withMessage("Ingresa el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingresa el campo apellidos"),
    check('nivelEstudio').notEmpty().withMessage("Ingresa el campo nivelEstudio"),
    check('institucion').notEmpty().withMessage("Ingresa el campo institucion"),
],HermanoCtrl.actualizarhermano)
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive"),
],HermanoCtrl.deshabilitar)




module.exports= router