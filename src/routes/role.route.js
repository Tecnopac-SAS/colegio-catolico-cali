const {Router} = require('express');
const router = Router();
const roleCtrl = require('../controllers/role.controller');

router.get('/listarRoles',roleCtrl.consultarRoles);
router.get('/CrearRole',roleCtrl.crearRole);
router.put('/actualizarRole/:id' ,roleCtrl.actualizarRole)




module.exports= router