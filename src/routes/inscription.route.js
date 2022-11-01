const {Router} = require('express');
const router = Router();
const inscriptionCtrl = require('../controllers/Inscription.controller');

router.get('/listarInscription',inscriptionCtrl.consultarInscriptions);
router.get('/listarInscription/:id',inscriptionCtrl.consultarInscription);
router.post('/crearInscription',inscriptionCtrl.crearInscription);
router.put('/actualizarInscription/:id' ,inscriptionCtrl.actualizarInscription)




module.exports= router