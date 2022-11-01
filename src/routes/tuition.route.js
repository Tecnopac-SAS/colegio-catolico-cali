const {Router} = require('express');
const router = Router();
const tuitionCtrl = require('../controllers/tuition.controller');

router.get('/listarTuitions',tuitionCtrl.consultarTuitions);
router.get('/listarTuition/:description',tuitionCtrl.consultarTuition);
router.get('/CrearTuition',tuitionCtrl.crearTuition);





module.exports= router