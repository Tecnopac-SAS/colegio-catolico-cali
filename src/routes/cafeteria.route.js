const {Router} = require('express');
const router = Router();
const CafeteriaCtrl = require('../controllers/Cafeteria.controller');

router.get('/listarCafeterias',CafeteriaCtrl.consultarCafeterias);
router.get('/listarCafeteria/:routeName',CafeteriaCtrl.consultarCafeteria);
router.get('/listarCafeteriaId/:id',CafeteriaCtrl.consultarId);
router.post('/crearCafeteria',CafeteriaCtrl.crearCafeteria);
router.put('/actualizarCafeteria/:id',CafeteriaCtrl.actualizarCafeteria)
router.put('/deshabilitar/:id' ,CafeteriaCtrl.deshabilitar)





module.exports= router