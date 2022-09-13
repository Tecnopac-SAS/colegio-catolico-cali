const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');

router.get('/listarUsuarios',userCtrl.consultarUsuarios);
router.get('/listarUsuario/:id',userCtrl.consultarUsuario);

router.post('/agregarUsuario',userCtrl.crearUsuario);
router.post('/login',userCtrl.login);

router.put('/actualizarUsuario/:id' ,userCtrl.actualizarUsuario)
router.delete('/eliminarUsuario/:id' ,userCtrl.eliminarUsuario)



module.exports= router