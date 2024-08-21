const {Router} = require('express');
const router = Router();
const documentosCtrl = require('../controllers/documentos.controller');
const {check} = require("express-validator");

router.get('/listarDocumentos', documentosCtrl.getDocumentos);
router.post('/crearDocumentos',
    [
        check("titulo").notEmpty().withMessage("Ingresa el campo titulo").bail().isString().withMessage("El campo titulo debe ser tipo string"),
        check("template").notEmpty().withMessage("Ingresa el campo template")
    ], documentosCtrl.crearDocumento);
router.get('/listarDocumentos/:id', documentosCtrl.listarDocumento);
router.put('/actualizarDocumento/:id', [
    check("titulo").notEmpty().withMessage("Ingresa el campo titulo").bail().isString().withMessage("El campo titulo debe ser tipo string"),
    check("template").notEmpty().withMessage("Ingresa el campo template")
], documentosCtrl.actualizarDocumento);
router.post('/crearPDFDocumento/:id', documentosCtrl.crearPDFDocumento);
router.get('/downloadPDFDocumento/:filename', documentosCtrl.downloadPDFDocumento);

module.exports = router