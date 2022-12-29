const {Router} = require('express');
const router = Router();
const AttendingManagementCtrl = require('../controllers/attendingManagement.controller');

router.get('/listarAttendingManagements',AttendingManagementCtrl.consultarAttendingManagements);
router.get('/listarAttendingManagement/:nombres',AttendingManagementCtrl.consultarAttendingManagement);
router.get('/listarAttendingManagementId/:id',AttendingManagementCtrl.consultarId);
router.put('/deshabilitar/:id' ,AttendingManagementCtrl.deshabilitar)





module.exports= router