const {Router} = require('express');
const router = Router();
const CanalReferenciaCtrl = require('../controllers/canalReferencia.controller');

router.get('/listarCanalReferencias',CanalReferenciaCtrl.consultarCanalReferencias);
router.get('/listarCanalReferencia/:routeName',CanalReferenciaCtrl.consultarCanalReferencia);
router.get('/listarCanalReferenciaId/:id',CanalReferenciaCtrl.consultarId);
router.post('/crearCanalReferencia',CanalReferenciaCtrl.crearCanalReferencia);
router.put('/actualizarCanalReferencia/:id',CanalReferenciaCtrl.actualizarCanalReferencia)
router.put('/deshabilitar/:id' ,CanalReferenciaCtrl.deshabilitar)





module.exports= router