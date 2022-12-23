const {Router} = require('express');
const router = Router();
const PadreFamiliaCtrl = require('../controllers/padreFamilia.controller');


router.get('/listarPadreFamilia',PadreFamiliaCtrl.consultarPadreFamilia);
router.post('/crearPadreFamilia',PadreFamiliaCtrl.crearPadreFamilia);
router.post('/crearMadreFamilia',PadreFamiliaCtrl.crearMadreFamilia);
router.post('/crearAcudiente',PadreFamiliaCtrl.crearAcudiente);
router.post('/crearResponsable',PadreFamiliaCtrl.crearResponsable);
router.get('/listarPadreFamiliaId/:id',PadreFamiliaCtrl.consultarId);
router.put('/actualizarPadreFamilia/:id',PadreFamiliaCtrl.actualizarPadreFamilia)
router.put('/deshabilitar/:id' ,PadreFamiliaCtrl.deshabilitar)




module.exports= router