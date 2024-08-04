const {Router} = require('express');
const router = Router();
const {check} = require("express-validator");
const inscriptionCtrl = require('../controllers/inscription.controller');

router.get('/listarInscription',inscriptionCtrl.consultarInscriptions);
router.get('/listarInscription/:id',inscriptionCtrl.consultarInscription);
router.post('/crearInscription',[
    check("price").notEmpty().withMessage("Ingresa el campo price."),
    check("description").notEmpty().withMessage("Ingresa el campo description."),
    check("idUser").notEmpty().withMessage("Ingresa el campo idUser"),
    check("idPeriod").notEmpty().withMessage("Ingresa el campo idPeriod")
],inscriptionCtrl.crearInscription);
router.put('/actualizarInscription/:id' ,
    [
        check("price").notEmpty().withMessage("Ingresa el campo price."),
        check("description").notEmpty().withMessage("Ingresa el campo description."),
        check("idUser").notEmpty().withMessage("Ingresa el campo idUser"),
        check("idPeriod").notEmpty().withMessage("Ingresa el campo idPeriod")
    ]
    ,inscriptionCtrl.actualizarInscription)
router.post('/actualizarValorInscription' ,
    [
        check("price").notEmpty().withMessage("Ingresa el campo price.")
    ],inscriptionCtrl.actualizarValorInscription)



module.exports= router