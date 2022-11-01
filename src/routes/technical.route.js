const {Router} = require('express');
const router = Router();
const TechnicalCtrl = require('../controllers/technical.controller');

router.get('/listarTechnicals',TechnicalCtrl.consultarTechnicals);
router.get('/listarTechnical/:course',TechnicalCtrl.consultarTechnical);
router.get('/listarTechnicalId/:id',TechnicalCtrl.consultarId);
router.post('/crearTechnical',TechnicalCtrl.crearTechnical);
router.put('/actualizarTechnical/:id',TechnicalCtrl.actualizarTechnical)
router.put('/deshabilitar/:id' ,TechnicalCtrl.deshabilitar)





module.exports= router