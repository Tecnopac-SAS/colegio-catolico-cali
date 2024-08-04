const {Router} = require('express');
const router = Router();
const gradesCtrl = require('../controllers/grades.controller');
const {check} = require("express-validator");

router.get('/listarGrades',gradesCtrl.consultarGrades);
router.post('/CrearGrades', [
    check('description').notEmpty().withMessage("Ingresa el campo description"),
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive")
],gradesCtrl.crearGrades);





module.exports= router