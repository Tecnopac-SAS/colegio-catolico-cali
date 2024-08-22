const {Router} = require('express');
const router = Router();
const historialAcademicoCtrl = require('../controllers/historialAcademico.controller');
const {check} = require("express-validator");
/**
 * @swagger
 * /historialAcademico/listarhistorialAcademico:
 *   get:
 *     summary: Lista todo el historial académico.
 *     tags: [Historial Académico]
 *     responses:
 *       200:
 *         description: Lista de historial académico.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HistorialAcademico'
 */
router.get('/listarhistorialAcademico',historialAcademicoCtrl.consultarhistorialAcademicoes);

/**
 * @swagger
 * /historialAcademico/crearhistorialAcademico:
 *   post:
 *     summary: Crea un nuevo historial académico.
 *     tags: [Historial Académico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HistorialAcademico'
 *     responses:
 *       201:
 *         description: Historial académico creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 */
router.post('/crearhistorialAcademico',[
    check("presscolar").notEmpty().withMessage("Ingrese el campo presscolar.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("primaria").notEmpty().withMessage("Ingrese el campo primaria.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("bachillerato").notEmpty().withMessage("Ingrese el campo bachillerato.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("anioAnterior").notEmpty().withMessage("Ingrese el campo anioAnterior"),
    check("motivoRetiro").notEmpty().withMessage("Ingrese el campo motivoRetiro"),
    check("repeticionAnio").notEmpty().withMessage("Ingrese el campo repeticionAnio"),
    check("distincionAcademica").notEmpty().withMessage("Ingrese el campo distincionAcademica"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
],historialAcademicoCtrl.crearhistorialAcademico);

/**
 * @swagger
 * /historialAcademico/listarhistorialAcademicoId/{id}:
 *   get:
 *     summary: Obtiene un historial académico por ID.
 *     tags: [Historial Académico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del historial académico.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del historial académico.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HistorialAcademico'
 *       404:
 *         description: Historial académico no encontrado.
 */
router.get('/listarhistorialAcademicoId/:id',historialAcademicoCtrl.consultarId);

/**
 * @swagger
 * /historialAcademico/actualizarhistorialAcademico/{id}:
 *   put:
 *     summary: Actualiza un historial académico por ID.
 *     tags: [Historial Académico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del historial académico.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HistorialAcademico'
 *     responses:
 *       200:
 *         description: Historial académico actualizado.
 *       400:
 *         description: Error en los datos enviados.
 */
router.put('/actualizarhistorialAcademico/:id',historialAcademicoCtrl.actualizarhistorialAcademico);

/**
 * @swagger
 * /historialAcademico/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un historial académico por ID.
 *     tags: [Historial Académico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del historial académico.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de activación del historial académico.
 *     responses:
 *       200:
 *         description: Historial académico deshabilitado.
 *       400:
 *         description: Error en los datos enviados.
 */
router.put('/deshabilitar/:id' ,
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa True o False")
    ],historialAcademicoCtrl.deshabilitar)

module.exports= router