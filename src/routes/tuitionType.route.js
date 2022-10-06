const {Router} = require('express');
const router = Router();
const tuitionTypeCtrl = require('../controllers/tuitionType.controller');

router.get('/listarTuitionType',tuitionTypeCtrl.consultarTuitionType);
router.get('/listarTuition/:description',tuitionTypeCtrl.consultarTuition);
router.post('/CrearTuitionType',tuitionTypeCtrl.crearTuitionType);
router.put('/actualizarTuition/:id',tuitionTypeCtrl.actualizarTuition)





module.exports= router