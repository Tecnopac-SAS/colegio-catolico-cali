const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pension.controller');

router.get('/listarPensiones',PensionCtrl.consultarPensiones);
router.get('/listarPension/:idGrade',PensionCtrl.consultarPension);
router.get('/listarPensionId/:id',PensionCtrl.consultarId);
router.post('/crearPension',PensionCtrl.crearPension);
router.put('/actualizarPension/:id',PensionCtrl.actualizarPension)
router.put('/deshabilitar/:id' ,PensionCtrl.deshabilitar)





module.exports= router