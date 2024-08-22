const {Router} = require('express');
const router = Router();
const DownloadCtrl = require('../controllers/downloads.controller');

/**
 * @swagger
 * /tuition/{idtuition}/{filetype}:
 *   get:
 *     summary: Descargar archivos de matrícula
 *     tags: [Download]
 *     parameters:
 *       - in: path
 *         name: idtuition
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la matrícula para la cual se solicita el archivo
 *       - in: path
 *         name: filetype
 *         schema:
 *           type: string
 *           enum:
 *             - pdf
 *             - docx
 *             - xlsx
 *           description: Tipo de archivo que se desea descargar
 *         required: true
 *         description: Tipo de archivo a descargar (ej., pdf, docx, xlsx)
 *     responses:
 *       200:
 *         description: Archivo descargado con éxito
 *       400:
 *         description: Error en los parámetros proporcionados (ID de matrícula o tipo de archivo inválidos)
 *       404:
 *         description: Archivo no encontrado para el ID de matrícula proporcionado y tipo de archivo
 */
router.get('/tuition/:idtuition/:filetype',DownloadCtrl.downloadTuitionFiles);

module.exports= router