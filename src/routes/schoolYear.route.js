const {Router} = require('express');
const router = Router();
const SchoolYearCtrl = require('../controllers/schoolYear.controller');
const {check} = require("express-validator");

router.get('/listarSchoolYears',SchoolYearCtrl.consultarSchoolYears);
router.get('/listarSchoolYear/:code',SchoolYearCtrl.consultarSchoolYear);
router.get('/listarSchoolYearId/:id',SchoolYearCtrl.consultarId);
router.post('/crearSchoolYear',SchoolYearCtrl.crearSchoolYear);
router.put('/actualizarSchoolYear/:id',SchoolYearCtrl.actualizarSchoolYear)
router.put('/deshabilitar/:id' ,SchoolYearCtrl.deshabilitar)
router.post('/actualizarAnioLectivo' ,
    check("id").notEmpty().withMessage("Ingresa el campo id"),
    check("password").notEmpty().withMessage("Ingresa el campo password")
    ,SchoolYearCtrl.cambioAnioLectivo)


module.exports= router