const {Router} = require('express');
const router = Router();
const acudienteCtrl = require('../controllers/acudiente.controller');

router.post('/addBolsillo',acudienteCtrl.actualizarBolsillo);
router.post('/getBolsillo',acudienteCtrl.getBolsillo);




module.exports= router