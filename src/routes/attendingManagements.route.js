const {Router} = require('express');
const router = Router();
const AttendingManagementCtrl = require('../controllers/AttendingManagement.controller');

router.get('/listarAttendingManagements',AttendingManagementCtrl.consultarAttendingManagements);
router.get('/listarAttendingManagement/:name',AttendingManagementCtrl.consultarAttendingManagement);
router.get('/listarAttendingManagementId/:id',AttendingManagementCtrl.consultarId);
router.post('/crearAttendingManagement',AttendingManagementCtrl.crearAttendingManagement);
router.put('/actualizarAttendingManagement/:id',AttendingManagementCtrl.actualizarAttendingManagement)
router.put('/deshabilitar/:id' ,AttendingManagementCtrl.deshabilitar)





module.exports= router