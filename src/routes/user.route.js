const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');

router.get('/listarUsuarios',userCtrl.consultarUsuarios);
router.get('/listarUsuario/:id',userCtrl.consultarUsuario);
router.get('/listarUsuarioEmail/:email',userCtrl.getUser);

router.post('/agregarUsuario',userCtrl.crearUsuario);
router.post('/login',userCtrl.login);

router.put('/actualizarUsuario/:id' ,userCtrl.actualizarUsuario)
router.put('/deshabilitarUsuario/:id' ,userCtrl.deshabilitarUsuario)

router.get('/recuperarPass/:email',userCtrl.recuperarPass)
router.put('/nuevaContrasena/:id' ,userCtrl.nuevaContraseña)

router.get('/generarCaptcha' ,userCtrl.cadenaAleatoria)

module.exports= router