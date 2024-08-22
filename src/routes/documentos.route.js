const {Router} = require('express');
const router = Router();
const documentosCtrl = require('../controllers/documentos.controller');
const {check} = require("express-validator");

/**
 * @openapi
 * /documentos/listarDocumentos:
 *   get:
 *     tags:
 *       - Documentos
 *     summary: "Listar todos los documentos"
 *     description: Obtener una lista de todos los documentos almacenados.
 *     responses:
 *       '200':
 *         description: Lista de documentos obtenida con éxito
 *       '500':
 *         description: Error al obtener los documentos
 */
router.get('/listarDocumentos', documentosCtrl.getDocumentos);

/**
 * @openapi
 * /documentos/crearDocumentos:
 *   post:
 *     tags:
 *       - Documentos
 *     summary: "Crear un nuevo documento"
 *     description: Crear un nuevo documento con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: "Título del documento"
 *               template:
 *                 type: string
 *                 description: "Plantilla del documento"
 *     responses:
 *       '201':
 *         description: Documento creado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/crearDocumentos',
    [
        check("titulo").notEmpty().withMessage("Ingresa el campo titulo").bail().isString().withMessage("El campo titulo debe ser tipo string"),
        check("template").notEmpty().withMessage("Ingresa el campo template")
    ], documentosCtrl.crearDocumento);

/**
 * @openapi
 * /documentos/listarDocumentos/{id}:
 *   get:
 *     tags:
 *       - Documentos
 *     summary: "Obtener documento por ID"
 *     description: Obtener un documento específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del documento
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Documento obtenido con éxito
 *       '404':
 *         description: Documento no encontrado
 */
router.get('/listarDocumentos/:id', documentosCtrl.listarDocumento);

/**
 * @openapi
 * /documentos/actualizarDocumento/{id}:
 *   put:
 *     tags:
 *       - Documentos
 *     summary: "Actualizar un documento"
 *     description: Actualizar la información de un documento existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del documento a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: "Título del documento"
 *               template:
 *                 type: string
 *                 description: "Plantilla del documento"
 *     responses:
 *       '200':
 *         description: Documento actualizado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Documento no encontrado
 */
router.put('/actualizarDocumento/:id', [
    check("titulo").notEmpty().withMessage("Ingresa el campo titulo").bail().isString().withMessage("El campo titulo debe ser tipo string"),
    check("template").notEmpty().withMessage("Ingresa el campo template")
], documentosCtrl.actualizarDocumento);

/**
 * @openapi
 * /documentos/crearPDFDocumento/{id}:
 *   post:
 *     tags:
 *       - Documentos
 *     summary: "Crear PDF de un documento"
 *     description: Generar un archivo PDF basado en el documento especificado por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del documento
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: PDF creado con éxito
 *       '404':
 *         description: Documento no encontrado
 */
router.post('/crearPDFDocumento/:id', documentosCtrl.crearPDFDocumento);

/**
 * @openapi
 * /documentos/downloadPDFDocumento/{filename}:
 *   get:
 *     tags:
 *       - Documentos
 *     summary: "Descargar PDF de un documento"
 *     description: Descargar el archivo PDF del documento especificado.
 *     parameters:
 *       - name: filename
 *         in: path
 *         required: true
 *         description: Nombre del archivo PDF
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: PDF descargado con éxito
 *       '404':
 *         description: Archivo no encontrado
 */
router.get('/downloadPDFDocumento/:filename', documentosCtrl.downloadPDFDocumento);

module.exports = router