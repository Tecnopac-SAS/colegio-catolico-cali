const {Router} = require('express');
const router = Router();
const LevelingCtrl = require('../controllers/leveling.controller');
const {check} = require("express-validator");

router.get('/listarLevelings', LevelingCtrl.consultarLevelings);
router.get('/listarLeveling/:codigo', LevelingCtrl.consultarLeveling);
router.get('/listarEstudiante/:codigo', LevelingCtrl.consultarStudentDatabases);
router.get('/listarLevelingId/:id', LevelingCtrl.consultarId);
router.post('/crearLeveling', [
    check("modalidadCurso").notEmpty().withMessage("Ingresa el campo modalidadCurso"),
    check("asignatura").notEmpty().withMessage("Ingresa el campo asignatura"),
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Opciones true o false"),
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado"),
    check("grado").notEmpty().withMessage("Ingresa el campo grado"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], LevelingCtrl.crearLeveling);
router.put('/actualizarLeveling/:id', [
    check("modalidadCurso").notEmpty().withMessage("Ingresa el campo modalidadCurso"),
    check("asignaturaisActive").notEmpty().withMessage("Ingresa el campo asignaturaisActive"),
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado"),
    check("grado").notEmpty().withMessage("Ingresa el campo grado"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], LevelingCtrl.actualizarLeveling)
router.put('/deshabilitar/:id', [
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa True o False")
], LevelingCtrl.deshabilitar)
router.put('/cambiarEstado/:id', [
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado")
], LevelingCtrl.cambiarEstado)


module.exports = router