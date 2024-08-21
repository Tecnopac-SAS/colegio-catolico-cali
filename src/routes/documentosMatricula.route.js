const { Router } = require('express');
const router = Router();
const DocumentosMatriculaCtrl = require('../controllers/documentosMatricula.controller');
const {check} = require("express-validator");


router.post('/',
    check('title').notEmpty().withMessage("Ingresa el campo title"),
    check('canViewType').notEmpty().withMessage('Ingresa el campo canViewType'),
    check('canViewValue').notEmpty().withMessage('Ingresa el campo canViewValue'),
    check('documentoid').notEmpty().withMessage('.Ingresa el campo documentoid')
    ,DocumentosMatriculaCtrl.create);
router.get('/', DocumentosMatriculaCtrl.getDocuments);
router.get('/:id', DocumentosMatriculaCtrl.getDocumentByID);
router.get('/student/:studentId', DocumentosMatriculaCtrl.getDocumentsByStudent);
router.put('/:id',
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("El campo es true o false."),
    check('title').notEmpty().withMessage("Ingresa el campo title"),
    check('canViewType').notEmpty().withMessage("Ingresa el campo canViewType"),
    check('canViewValue').notEmpty().withMessage("Ingresa el campo canViewValue"),
    check('documentoid').notEmpty().withMessage("Ingresa el campo documentoid"),
    check('canViewTuitionType').notEmpty().withMessage("Ingresa el campo canViewTuitionType")
    ,DocumentosMatriculaCtrl.update);



module.exports = router