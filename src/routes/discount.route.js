const {Router} = require('express');
const router = Router();
const DiscountCtrl = require('../controllers/discount.controller');
const {check} = require("express-validator");

const frequencyType = ['Unico', 'frecuente'];
const serviceType = ['Pension', 'Matricula']

router.get('/listarDiscounts',DiscountCtrl.consultarDiscounts);
router.get('/listarDiscount/:name',DiscountCtrl.consultarDiscount);
router.get('/listarDiscountId/:id',DiscountCtrl.consultarId);
router.post('/crearDiscount',[
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("starDate").notEmpty().withMessage("Ingresa el campo starDate"),
    check("finalDate").notEmpty().withMessage("Ingresa el campo finalDate"),
    check("percentage").notEmpty().withMessage("Ingresa el campo percentage"),
    check("useType").optional(),
    check("frequency").notEmpty().withMessage("Ingresa el campo frequency").bail().isIn(frequencyType).withMessage("Ingresa frequency correctamente"),
    check("service").notEmpty().withMessage("Ingresa el campo service").bail().isIn(serviceType).withMessage("El tipo de servicio no es valido"),
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("Este campo tiene que ser booleano")
],DiscountCtrl.crearDiscount);
router.put('/actualizarDiscount/:id',
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("starDate").notEmpty().withMessage("Ingresa el campo starDate"),
    check("finalDate").notEmpty().withMessage("Ingresa el campo finalDate"),
    check("percentage").notEmpty().withMessage("Ingresa el campo percentage"),
    check("useType").notEmpty().withMessage("Ingresa el campo useType"),
    check("frequency").notEmpty().withMessage("Ingresa el campo frequency").bail().isIn(frequencyType).withMessage("Ingresa frequency correctamente"),
    check("service").notEmpty().withMessage("Ingresa el campo service").bail().isIn(serviceType).withMessage("El tipo de servicio no es valido"),
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("Este campo tiene que ser booleano")
    ,DiscountCtrl.actualizarDiscount)
router.put('/deshabilitar/:id' ,[
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("El campo status es tipo boolean")
],DiscountCtrl.deshabilitar)
router.delete('/eliminar/:id' ,DiscountCtrl.eliminar)





module.exports= router