const {Router} = require('express');
const router = Router();
const gradesCtrl = require('../controllers/grades.controller');

router.get('/listarGrades',gradesCtrl.consultarGrades);
router.get('/CrearGrades',gradesCtrl.crearGrades);





module.exports= router