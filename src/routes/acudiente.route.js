const {Router} = require('express');
const router = Router();
const acudienteCtrl = require('../controllers/acudiente.controller');

router.post('/addBolsillo',acudienteCtrl.actualizarBolsillo);
router.post('/getBolsillo',acudienteCtrl.getBolsillo);
router.post('/addLonchera',acudienteCtrl.actualizarLonchera);
router.post('/getLonchera',acudienteCtrl.getLonchera);




module.exports= router