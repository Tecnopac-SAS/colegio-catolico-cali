const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');

router.get('/listar',userCtrl.consultarUsuarios);
router.get('/listarSq',userCtrl.consultarUsuariosSq);
router.get('/listar/:id',userCtrl.consultarUsuario);
router.get('/listarSq/:id',userCtrl.consultarUsuarioSq);

router.post('/agregar',userCtrl.crearUsuario);
router.post('/agregar2',userCtrl.crearUsuarioSq);
router.post('/login',userCtrl.login);
router.post('/loginSq',userCtrl.loginSq);

router.put('/actualizarUsuario/:id' ,userCtrl.actualizar)
router.delete('/eliminarUsuario/:id' ,userCtrl.eliminarUsuario)



module.exports= router