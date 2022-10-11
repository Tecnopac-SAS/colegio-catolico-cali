const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pension.controller');

router.get('/listarPensiones',PensionCtrl.consultarPensiones);
router.get('/listarPension/:description',PensionCtrl.consultarPension);
router.post('/crearPension',PensionCtrl.crearPension);
router.put('/actualizarPension/:id',PensionCtrl.actualizarPension)





module.exports= router