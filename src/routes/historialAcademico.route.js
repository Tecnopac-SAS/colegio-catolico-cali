const {Router} = require('express');
const router = Router();
const historialAcademicoCtrl = require('../controllers/historialAcademico.controller');
const {check} = require("express-validator");

router.get('/listarhistorialAcademico',historialAcademicoCtrl.consultarhistorialAcademicoes);
router.post('/crearhistorialAcademico',[
    check("presscolar").notEmpty().withMessage("Ingrese el campo presscolar.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("primaria").notEmpty().withMessage("Ingrese el campo primaria.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("bachillerato").notEmpty().withMessage("Ingrese el campo bachillerato.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("anioAnterior").notEmpty().withMessage("Ingrese el campo anioAnterior"),
    check("motivoRetiro").notEmpty().withMessage("Ingrese el campo motivoRetiro"),
    check("repeticionAnio").notEmpty().withMessage("Ingrese el campo repeticionAnio"),
    check("distincionAcademica").notEmpty().withMessage("Ingrese el campo distincionAcademica"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
],historialAcademicoCtrl.crearhistorialAcademico);
router.get('/listarhistorialAcademicoId/:id',historialAcademicoCtrl.consultarId);
router.put('/actualizarhistorialAcademico/:id',historialAcademicoCtrl.actualizarhistorialAcademico)
router.put('/deshabilitar/:id' ,historialAcademicoCtrl.deshabilitar)

module.exports= router