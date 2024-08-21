const {Router} = require('express');
const router = Router();
const CanalReferenciaCtrl = require('../controllers/canalReferencia.controller');
const {check} = require("express-validator");

router.get('/listarCanalReferencias', CanalReferenciaCtrl.consultarCanalReferencias);
router.get('/listarCanalReferencia/:routeName', CanalReferenciaCtrl.consultarCanalReferencia);
router.get('/listarCanalReferenciaId/:id', CanalReferenciaCtrl.consultarId);
router.post('/crearCanalReferencia',
    [
        check('comoSeEntero').notEmpty().withMessage("Ingresa el campo comoSeEntero"),
        check('comoSabe').notEmpty().withMessage("Ingresa el campo comoSabe"),
        check('porqueIngresar').notEmpty().withMessage("Ingresa el campo porqueIngresar"),
        check('nombreAcudiente').notEmpty().withMessage("Ingresa el campo nombreAcudiente"),
        check('aceptaCompromisos').notEmpty().withMessage("Ingresa el campo aceptaCompromisos"),
        check("estadoPago").notEmpty().withMessage("Ingresa el campo estadoPago"),
        check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
    ]
    , CanalReferenciaCtrl.crearCanalReferencia);
router.put('/actualizarCanalReferencia/:id',
    check('comoSeEntero').notEmpty().withMessage("Ingresa el campo comoSeEntero"),
    check('comoSabe').notEmpty().withMessage("Ingresa el campo comoSabe"),
    check('porqueIngresar').notEmpty().withMessage("Ingresa el campo porqueIngresar"),
    check('nombreAcudiente').notEmpty().withMessage("Ingresa el campo nombreAcudiente"),
    check('aceptaCompromisos').notEmpty().withMessage("Ingresa el campo aceptaCompromisos"),
    check('estadoPago').notEmpty().withMessage("Ingresa el campo estadoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
    , CanalReferenciaCtrl.actualizarCanalReferencia)
router.put('/deshabilitar/:id', [
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive")
], CanalReferenciaCtrl.deshabilitar)


module.exports = router