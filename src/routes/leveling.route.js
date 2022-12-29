const {Router} = require('express');
const router = Router();
const LevelingCtrl = require('../controllers/leveling.controller');

router.get('/listarLevelings',LevelingCtrl.consultarLevelings);
router.get('/listarLeveling/:codigo',LevelingCtrl.consultarLeveling);
router.get('/listarEstudiante/:codigo',LevelingCtrl.consultarStudentDatabases);
router.get('/listarLevelingId/:id',LevelingCtrl.consultarId);
router.post('/crearLeveling',LevelingCtrl.crearLeveling);
router.put('/actualizarLeveling/:id',LevelingCtrl.actualizarLeveling)
router.put('/deshabilitar/:id' ,LevelingCtrl.deshabilitar)
router.put('/cambiarEstado/:id' ,LevelingCtrl.cambiarEstado)




module.exports= router