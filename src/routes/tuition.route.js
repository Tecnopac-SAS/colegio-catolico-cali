const {Router} = require('express');
const router = Router();
const tuitionCtrl = require('../controllers/tuition.controller');
const {check} = require("express-validator");

router.get('/listarTuitions',tuitionCtrl.consultarTuitions);
router.get('/listarTuition/:description',tuitionCtrl.consultarTuition);
router.get('/CrearTuition',
    [
        check('tuition').notEmpty().withMessage("Ingresa el campo tuition")
    ],tuitionCtrl.crearTuition);





module.exports= router