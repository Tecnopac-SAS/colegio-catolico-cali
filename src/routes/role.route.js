const {Router} = require('express');
const router = Router();
const roleCtrl = require('../controllers/role.controller');
const {check} = require("express-validator");

router.get('/listarRoles', roleCtrl.consultarRoles);
router.post('/CrearRole', [
    check('role').notEmpty().withMessage("Ingresa el campo role.")
], roleCtrl.crearRole);
router.put('/actualizarRole/:id',
    [check('role').notEmpty().withMessage("Ingresa el campo role.")]
    , roleCtrl.actualizarRole)
router.delete('/eliminarRole/:id', roleCtrl.deleteRole);


module.exports = router