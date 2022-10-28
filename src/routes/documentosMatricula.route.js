const {Router} = require('express');
const router = Router();
const DocumentosMatriculaCtrl = require('../controllers/documentosMatricula.controller');

router.get('/listarDocumentosMatriculas',DocumentosMatriculaCtrl.consultarDocumentosMatriculas);
router.get('/listarDocumentosMatricula/:name',DocumentosMatriculaCtrl.consultarDocumentosMatricula);
router.get('/listarDocumentosMatriculaId/:id',DocumentosMatriculaCtrl.consultarId);
router.post('/crearDocumentosMatricula',DocumentosMatriculaCtrl.crearDocumentosMatricula);
router.put('/actualizarDocumentosMatricula/:id',DocumentosMatriculaCtrl.actualizarDocumentosMatricula)
router.put('/deshabilitar/:id' ,DocumentosMatriculaCtrl.deshabilitar)





module.exports= router