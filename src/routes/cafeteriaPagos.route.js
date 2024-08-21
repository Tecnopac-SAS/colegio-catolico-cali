const {Router} = require('express');
const router = Router();
const cafeteriaPagosCtrl = require('../controllers/cafeteriaPagos.controller');
const {check} = require("express-validator");


router.post('/crearPago', [
    check('data').notEmpty().withMessage("Ingresa el campo data"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
], cafeteriaPagosCtrl.crearPago);
router.get('/getPagos', cafeteriaPagosCtrl.getPagos);
router.get('/listPagoSearch/:dato', cafeteriaPagosCtrl.listPagoSearch);
router.get('/entregarTarjeta/:id', cafeteriaPagosCtrl.entregarTarjeta);


module.exports = router
