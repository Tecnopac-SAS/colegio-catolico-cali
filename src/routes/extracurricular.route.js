const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');
const uploadCtrl = require('../controllers/upload.controller');


router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);
router.post('/crearExtracurricular',extracurricularCtrl.crearExtracurricular);
router.post('/pago',extracurricularCtrl.pago);
router.post('/misExtracurriculares',extracurricularCtrl.misExtracurriculares);
router.get('/listarExtracurricularId/:id',extracurricularCtrl.consultarId);
router.put('/actualizarExtracurricular/:id',extracurricularCtrl.actualizarExtracurricular)
router.put('/deshabilitar/:id' ,extracurricularCtrl.deshabilitar)
router.put('/desvincularse/:id' ,extracurricularCtrl.desvincularse)




module.exports= router