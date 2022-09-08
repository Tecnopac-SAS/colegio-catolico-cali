const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');

router.get('/listar',userCtrl.consultarUsuarios);
router.get('/listar/:id',userCtrl.consultarUsuario);

router.post('/agregar',userCtrl.crearUsuario);
router.post('/login',userCtrl.login);

router.put('/actualizarUsuario/:id' ,userCtrl.actualizar)
router.delete('/eliminarUsuario/:id' ,userCtrl.eliminarUsuario)



module.exports= router