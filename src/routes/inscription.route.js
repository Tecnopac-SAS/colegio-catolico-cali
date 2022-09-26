const {Router} = require('express');
const router = Router();
const inscriptionCtrl = require('../controllers/inscription.controller');

router.get('/listarInscripciones',inscriptionCtrl.consultarInscripciones);
router.get('/listarInscripcion',inscriptionCtrl.consultarInscripcion);
router.get('/CrearInscripcion',inscriptionCtrl.crearInscripcion);
router.put('/actualizarInscripcion/:id' ,inscriptionCtrl.actualizarInscripcion)




module.exports= router