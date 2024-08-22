const {Router} = require('express');
const router = Router();
const aptitudesCtrl = require('../controllers/aptitudesEstadoFisico.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /aptitudes/listarAptitudes:
 *   get:
 *     summary: Listar todas las aptitudes
 *     tags: [Aptitudes]
 *     responses:
 *       200:
 *         description: Lista de aptitudes obtenida con éxito
 *       400:
 *         description: Error al obtener las aptitudes
 */

router.get('/listarAptitudes', aptitudesCtrl.consultarAptitudes);

/**
 * @swagger
 * /aptitudes/crearAptitudes:
 *   post:
 *     summary: Crear nuevas aptitudes
 *     tags: [Aptitudes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deporteGusto:
 *                 type: string
 *                 description: Deporte de gusto
 *               arteGusto:
 *                 type: string
 *                 description: Arte de gusto
 *               distincionDeporte:
 *                 type: string
 *                 description: Distinción en deportes
 *               distincionArtistica:
 *                 type: string
 *                 description: Distinción artística
 *               pasatiempos:
 *                 type: string
 *                 description: Pasatiempos
 *               coleccion:
 *                 type: string
 *                 description: Colección
 *               estadoSalud:
 *                 type: string
 *                 description: Estado de salud
 *               enfermedades:
 *                 type: string
 *                 description: Enfermedades
 *               medicamentos:
 *                 type: string
 *                 description: Medicamentos
 *               limitacionEducacionFisica:
 *                 type: string
 *                 description: Limitaciones en educación física
 *               tipoSangre:
 *                 type: string
 *                 description: Tipo de sangre
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante asociado
 *     responses:
 *       201:
 *         description: Aptitudes creadas con éxito
 *       400:
 *         description: Error al crear las aptitudes
 */
router.post('/crearAptitudes', [
    check('deporteGusto').notEmpty().withMessage("Ingresa el campo deporteGusto"),
    check('arteGusto').notEmpty().withMessage("Ingresa el campo arteGusto"),
    check('distincionDeporte').notEmpty().withMessage("Ingresa el campo distincionDeporte"),
    check('distincionArtistica').notEmpty().withMessage("Ingresa el campo distincionArtistica"),
    check("pasatiempos").notEmpty().withMessage("Ingresa el campo pasatiempos"),
    check("coleccion").notEmpty().withMessage("Ingresa el campo coleccion"),
    check("estadoSalud").notEmpty().withMessage("Ingresa el campo estadoSalud"),
    check("enfermedades").notEmpty().withMessage("Ingresa el campo enfermedades"),
    check("medicamentos").notEmpty().withMessage("Ingresa el campo medicamentos"),
    check("limitacionEducacionFisica").notEmpty().withMessage("Ingresa el campo limitacionEducacionFisica"),
    check("tipoSangre").notEmpty().withMessage("Ingresa el campo tipoSangre"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], aptitudesCtrl.crearAptitudes);

/**
 * @swagger
 * /aptitudes/listarAptitudesId/{id}:
 *   get:
 *     summary: Listar aptitudes por ID
 *     tags: [Aptitudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de las aptitudes
 *     responses:
 *       200:
 *         description: Aptitudes obtenidas con éxito
 *       400:
 *         description: Error al obtener las aptitudes
 */
router.get('/listarAptitudesId/:id', aptitudesCtrl.consultarId);

/**
 * @swagger
 * /aptitudes/actualizarAptitudes/{id}:
 *   put:
 *     summary: Actualizar aptitudes por ID
 *     tags: [Aptitudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de las aptitudes a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deporteGusto:
 *                 type: string
 *                 description: Deporte de gusto
 *               arteGusto:
 *                 type: string
 *                 description: Arte de gusto
 *               distincionDeporte:
 *                 type: string
 *                 description: Distinción en deportes
 *               distincionArtistica:
 *                 type: string
 *                 description: Distinción artística
 *               pasatiempos:
 *                 type: string
 *                 description: Pasatiempos
 *               coleccion:
 *                 type: string
 *                 description: Colección
 *               estadoSalud:
 *                 type: string
 *                 description: Estado de salud
 *               enfermedades:
 *                 type: string
 *                 description: Enfermedades
 *               medicamentos:
 *                 type: string
 *                 description: Medicamentos
 *               limitacionEducacionFisica:
 *                 type: string
 *                 description: Limitaciones en educación física
 *               tipoSangre:
 *                 type: string
 *                 description: Tipo de sangre
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante asociado
 *     responses:
 *       200:
 *         description: Aptitudes actualizadas con éxito
 *       400:
 *         description: Error al actualizar las aptitudes
 */
router.put('/actualizarAptitudes/:id', aptitudesCtrl.actualizarAptitudes)

/**
 * @swagger
 * /aptitudes/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar aptitudes por ID
 *     tags: [Aptitudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de las aptitudes a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado activo/inactivo de las aptitudes
 *     responses:
 *       200:
 *         description: Aptitudes deshabilitadas con éxito
 *       400:
 *         description: Error al deshabilitar las aptitudes
 */
router.put('/deshabilitar/:id',
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Opciones true o false")
    ]
    , aptitudesCtrl.deshabilitar)


module.exports = router