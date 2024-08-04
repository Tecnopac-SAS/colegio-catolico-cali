const {Router} = require('express');
const router = Router();
const periodCtrl = require('../controllers/period.controller');
const {check} = require("express-validator");

router.get('/listarPeriodos',periodCtrl.consultarPeriodos);
router.get('/listarPeriodo/:id',periodCtrl.consultarPeriodo);
router.post('/CrearPeriodo',[
    check('age').notEmpty().withMessage("Ingrese el campo age."),
    check('password').notEmpty().withMessage("Ingrese el campo password."),
    check('identifier').notEmpty().withMessage("Ingrese el campo identifier."),
    check('consecutive').notEmpty().withMessage("Ingrese el campo consecutive.")
], periodCtrl.crearPerido);
router.put('/actualizarPeriodo/:id',[
    check('age').notEmpty().withMessage("Ingrese el campo age."),
    check('password').notEmpty().withMessage("Ingrese el campo password."),
    check('identifier').notEmpty().withMessage("Ingrese el campo identifier."),
    check('consecutive').notEmpty().withMessage("Ingrese el campo consecutive.")
] ,periodCtrl.actualizarPeriodo)




module.exports= router