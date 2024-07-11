const {Router} = require('express');
const router = Router();
const acudienteCtrl = require('../controllers/acudiente.controller');

router.post('/descBolsillo',acudienteCtrl.descuentoBolsillo);
router.post('/addBolsillo',acudienteCtrl.actualizarBolsillo);
router.post('/getBolsillo',acudienteCtrl.getBolsillo);
router.post('/getAcudiente',acudienteCtrl.getAcudiente);
router.post('/getAcudientebyEstudiante',acudienteCtrl.getAcudientebyEstudiante);
router.post('/actualizarAcudiente',acudienteCtrl.actualizarAcudiente);




module.exports= router