const {Router} = require('express');
const router = Router();
const periodCtrl = require('../controllers/period.controller');

router.get('/listarPeriodos',periodCtrl.consultarPeriodos);
router.get('/listarPeriodo',periodCtrl.consultarPeriodo);
router.post('/CrearPeriodo',periodCtrl.crearPerido);
router.put('/actualizarPeriodo/:id' ,periodCtrl.actualizarPeriodo)




module.exports= router