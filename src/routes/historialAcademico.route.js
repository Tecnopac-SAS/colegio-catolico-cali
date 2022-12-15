const {Router} = require('express');
const router = Router();
const historialAcademicoCtrl = require('../controllers/historialAcademico.controller');
const uploadCtrl = require('../controllers/upload.controller');


router.get('/listarhistorialAcademico',historialAcademicoCtrl.consultarhistorialAcademicoes);
router.post('/crearhistorialAcademico',historialAcademicoCtrl.crearhistorialAcademico);
router.get('/listarhistorialAcademicoId/:id',historialAcademicoCtrl.consultarId);
router.put('/actualizarhistorialAcademico/:id',historialAcademicoCtrl.actualizarhistorialAcademico)
router.put('/deshabilitar/:id' ,historialAcademicoCtrl.deshabilitar)




module.exports= router