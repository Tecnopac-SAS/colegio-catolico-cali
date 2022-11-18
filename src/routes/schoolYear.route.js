const {Router} = require('express');
const router = Router();
const SchoolYearCtrl = require('../controllers/schoolYear.controller');

router.get('/listarSchoolYears',SchoolYearCtrl.consultarSchoolYears);
router.get('/listarSchoolYear/:code',SchoolYearCtrl.consultarSchoolYear);
router.get('/listarSchoolYearId/:id',SchoolYearCtrl.consultarId);
router.post('/crearSchoolYear',SchoolYearCtrl.crearSchoolYear);
router.put('/actualizarSchoolYear/:id',SchoolYearCtrl.actualizarSchoolYear)
router.put('/deshabilitar/:id' ,SchoolYearCtrl.deshabilitar)
router.post('/actualizarAnioLectivo' ,SchoolYearCtrl.cambioAnioLectivo)


module.exports= router