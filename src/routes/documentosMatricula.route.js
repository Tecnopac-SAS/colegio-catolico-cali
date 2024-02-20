const { Router } = require('express');
const router = Router();
const DocumentosMatriculaCtrl = require('../controllers/documentosMatricula.controller');


router.post('/', DocumentosMatriculaCtrl.create);
router.get('/', DocumentosMatriculaCtrl.getDocuments);
router.get('/:id', DocumentosMatriculaCtrl.getDocumentByID);
router.get('/student/:studentId', DocumentosMatriculaCtrl.getDocumentsByStudent);
router.put('/:id', DocumentosMatriculaCtrl.update);



module.exports = router