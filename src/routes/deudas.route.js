const {Router} = require('express');
const router = Router();
const deudasCtrl = require('../controllers/deudas.controller');
const {check} = require("express-validator");

router.get('/listarDeudas',deudasCtrl.consultarDeudas);
router.get('/listarDeuda/:id',deudasCtrl.consultarDeuda);
router.post('/crearDeudas',[
    check('deudaCode').notEmpty().withMessage("Ingresa el campo deudaCode"),
    check('concepto').notEmpty().withMessage("Ingresa el campo concepto"),
    check('fechaInicio').notEmpty().withMessage("Ingresa el campo fechaInicio"),
    check('fechaFinal').notEmpty().withMessage('Ingresa el campo fechaFinal'),
    check('monto').notEmpty().withMessage("Ingresa el campos monto"),
    check('cobro').notEmpty().withMessage("Ingresa el campo estado"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("cobroValue").notEmpty().withMessage("Ingresa el campo cobroValue")
],deudasCtrl.crearDeuda);
router.put('/editarDeuda/:id',[
    check('deudaCode').notEmpty().withMessage("Ingresa el campo deudaCode"),
    check('concepto').notEmpty().withMessage("Ingresa el campo concepto"),
    check('fechaInicio').notEmpty().withMessage("Ingresa el campo fechaInicio"),
    check('fechaFinal').notEmpty().withMessage('Ingresa el campo fechaFinal'),
    check('monto').notEmpty().withMessage("Ingresa el campos monto"),
    check('cobro').notEmpty().withMessage("Ingresa el campo estado"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("cobroValue").notEmpty().withMessage("Ingresa el campo cobroValue")
],deudasCtrl.editarDeuda);

module.exports= router