const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');

router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);
router.post('/crearExtracurricular',extracurricularCtrl.crearExtracurricular);





module.exports= router