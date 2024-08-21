const {Router} = require('express');
const router = Router();
const aptitudesCtrl = require('../controllers/aptitudesEstadoFisico.controller');
const {check} = require("express-validator");


router.get('/listarAptitudes', aptitudesCtrl.consultarAptitudes);
router.post('/crearAptitudes', [
    check('deporteGusto').notEmpty().withMessage("Ingresa el campo deporteGusto"),
    check('arteGusto').notEmpty().withMessage("Ingresa el campo arteGusto"),
    check('distincionDeporte').notEmpty().withMessage("Ingresa el campo distincionDeporte"),
    check('distincionArtistica').notEmpty().withMessage("Ingresa el campo distincionArtistica"),
    check("pasatiempos").notEmpty().withMessage("Ingresa el campo pasatiempos"),
    check("coleccion").notEmpty().withMessage("Ingresa el campo coleccion"),
    check("estadoSalud").notEmpty().withMessage("Ingresa el campo estadoSalud"),
    check("enfermedades").notEmpty().withMessage("Ingresa el campo enfermedades"),
    check("medicamentos").notEmpty().withMessage("Ingresa el campo medicamentos"),
    check("limitacionEducacionFisica").notEmpty().withMessage("Ingresa el campo limitacionEducacionFisica"),
    check("tipoSangre").notEmpty().withMessage("Ingresa el campo tipoSangre"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], aptitudesCtrl.crearAptitudes);
router.get('/listarAptitudesId/:id', aptitudesCtrl.consultarId);
router.put('/actualizarAptitudes/:id', aptitudesCtrl.actualizarAptitudes)
router.put('/deshabilitar/:id',
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Opciones true o false")
    ]
    , aptitudesCtrl.deshabilitar)


module.exports = router