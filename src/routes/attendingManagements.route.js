const {Router} = require('express');
const router = Router();
const AttendingManagementCtrl = require('../controllers/attendingManagement.controller');
const {check} = require("express-validator");

router.get('/listarAttendingManagements',AttendingManagementCtrl.consultarAttendingManagements);
router.get('/listarAttendingManagement/:nombres',AttendingManagementCtrl.consultarAttendingManagement);
router.get('/listarAttendingManagementId/:id',AttendingManagementCtrl.consultarId);
router.put('/deshabilitar/:id',
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Opciones true o false")
    ], AttendingManagementCtrl.deshabilitar)





module.exports= router