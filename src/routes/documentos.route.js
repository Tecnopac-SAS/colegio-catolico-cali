const {Router} = require('express');
const router = Router();
const documentosCtrl = require('../controllers/documentos.controller');

router.get('/listarDocumentos',documentosCtrl.getDocumentos);
router.post('/crearDocumentos',documentosCtrl.crearDocumento);
router.get('/listarDocumentos/:id',documentosCtrl.listarDocumento);
router.put('/actualizarDocumento/:id',documentosCtrl.actualizarDocumento);
router.post('/crearPDFDocumento/:id',documentosCtrl.crearPDFDocumento);
router.get('/downloadPDFDocumento/:filename',documentosCtrl.downloadPDFDocumento);

module.exports= router