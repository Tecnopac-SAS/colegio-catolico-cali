const { Router } = require('express');
const router = Router();
const DocumentosMatriculaCtrl = require('../controllers/documentosMatricula.controller');


router.post('/', DocumentosMatriculaCtrl.create);
router.get('/', DocumentosMatriculaCtrl.getDocuments);
router.get('/student/:studentId', DocumentosMatriculaCtrl.getDocumentsByStudent);
router.put('/:id', DocumentosMatriculaCtrl.update);

/* router.get('/listarDocumentosMatriculas',DocumentosMatriculaCtrl.consultarDocumentosMatriculas);
router.get('/listarDocumentosMatricula/:name',DocumentosMatriculaCtrl.consultarDocumentosMatricula);
router.get('/listarDocumentosMatriculaId/:id',DocumentosMatriculaCtrl.consultarId);
router.put('/actualizarDocumentosMatricula/:id',DocumentosMatriculaCtrl.actualizarDocumentosMatricula)
router.put('/deshabilitar/:id' ,DocumentosMatriculaCtrl.deshabilitar) */





module.exports = router