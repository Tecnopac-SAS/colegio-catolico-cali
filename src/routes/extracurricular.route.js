const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');
const uploadCtrl = require('../controllers/upload.controller');


router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);
router.post('/crearExtracurricular',uploadCtrl.single('imagen'),extracurricularCtrl.crearExtracurricular);
router.get('/extracurricular/img/:img',extracurricularCtrl.getImage)
router.put('/actualizarExtracurricular/:id' ,extracurricularCtrl.actualizarExtracurricular)




module.exports= router