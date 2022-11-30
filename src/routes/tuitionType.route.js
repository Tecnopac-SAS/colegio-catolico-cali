const {Router} = require('express');
const router = Router();
const tuitionTypeCtrl = require('../controllers/tuitionType.controller');

router.get('/listarTuitionTypes',tuitionTypeCtrl.consultarTuitionType);
router.get('/listarTuition/:description',tuitionTypeCtrl.consultarTuition);
router.get('/listarTuitionId/:id',tuitionTypeCtrl.consultarId);
router.post('/CrearTuitionType',tuitionTypeCtrl.crearTuitionType);
router.put('/actualizarTuition/:id',tuitionTypeCtrl.actualizarTuition)
router.put('/deshabilitar/:id' ,tuitionTypeCtrl.deshabilitar)




module.exports= router