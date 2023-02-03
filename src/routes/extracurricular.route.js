const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');
const uploadCtrl = require('../controllers/upload.controller');


router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);
router.post('/crearExtracurricular',uploadCtrl.single('imagen'),extracurricularCtrl.crearExtracurricular);
router.post('/pago',extracurricularCtrl.pago);
router.post('/misExtracurriculares',extracurricularCtrl.misExtracurriculares);
router.get('/extracurricular/img/:img',extracurricularCtrl.getImage)
router.get('/listarExtracurricularId/:id',extracurricularCtrl.consultarId);
router.put('/actualizarExtracurricular/:id',extracurricularCtrl.actualizarExtracurricular)
router.put('/deshabilitar/:id' ,extracurricularCtrl.deshabilitar)




module.exports= router