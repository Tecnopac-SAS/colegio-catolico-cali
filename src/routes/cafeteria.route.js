const {Router} = require('express');
const router = Router();
const CafeteriaCtrl = require('../controllers/cafeteria.controller');
const {check} = require("express-validator");

router.get('/listarCafeterias',CafeteriaCtrl.consultarCafeterias);
router.get('/listarCafeteria/:routeName',CafeteriaCtrl.consultarCafeteria);
router.get('/listarCafeteriaId/:id',CafeteriaCtrl.consultarId);
router.post('/crearCafeteria',[
    check('description').notEmpty().withMessage("Ingresa el campo description"),
    check('pay').notEmpty().withMessage("Ingresa el campo pay")
],CafeteriaCtrl.crearCafeteria);
router.put('/actualizarCafeteria/:id',[
        check('description').notEmpty().withMessage("Ingresa el campo description"),
        check('pay').notEmpty().withMessage("Ingresa el campo pay")
    ]
    ,CafeteriaCtrl.actualizarCafeteria)
router.put('/deshabilitar/:id',[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Solo se permite true o false")
] ,CafeteriaCtrl.deshabilitar)






module.exports= router
