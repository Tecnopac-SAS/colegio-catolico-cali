const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');

router.get('/listarExtracurricular',extracurricularCtrl.consultarextracurricular);
router.get('/crearExtracurricular',extracurricularCtrl.crearextracurricular);





module.exports= router