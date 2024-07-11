const {Router} = require('express');
const router = Router();
const deudasCtrl = require('../controllers/deudas.controller');

router.get('/listarDeudas',deudasCtrl.consultarDeudas);
router.get('/listarDeuda/:id',deudasCtrl.consultarDeuda);
router.post('/crearDeudas',deudasCtrl.crearDeuda);
router.put('/editarDeuda/:id',deudasCtrl.editarDeuda);

module.exports= router