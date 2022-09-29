const {Router} = require('express');
const router = Router();
const gradeCtrl = require('../controllers/grade.controller');

router.get('/listarGrados',gradeCtrl.consultarGrados);
router.get('/listarGrado/:id',gradeCtrl.consultarGrado);
router.post('/crearGrado',gradeCtrl.crearGrado);
router.put('/actualizarGrado/:id' ,gradeCtrl.actualizarGrado)




module.exports= router