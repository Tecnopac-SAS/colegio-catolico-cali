const {Router} = require('express');
const router = Router();
const HermanoCtrl = require('../controllers/hermanos.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarHermano:
 *   get:
 *     summary: Listar todos los hermanos
 *     tags: [Hermanos]
 *     responses:
 *       200:
 *         description: Lista de hermanos obtenida exitosamente
 *       500:
 *         description: Error en el servidor al obtener la lista de hermanos
 */
router.get('/listarHermano',HermanoCtrl.consultarHermano);

/**
 * @swagger
 * /crearHermano:
 *   post:
 *     summary: Crear un nuevo hermano
 *     tags: [Hermanos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - nivelEstudio
 *               - institucion
 *               - idEstudiante
 *             properties:
 *               nombres:
 *                 type: string
 *                 description: Nombres del hermano
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del hermano
 *               nivelEstudio:
 *                 type: string
 *                 description: Nivel de estudio del hermano
 *               institucion:
 *                 type: string
 *                 description: Institución a la que asiste el hermano
 *               idEstudiante:
 *                 type: integer
 *                 description: ID del estudiante asociado al hermano
 *     responses:
 *       201:
 *         description: Hermano creado exitosamente
 *       400:
 *         description: Error en la validación de los datos proporcionados
 *       500:
 *         description: Error en el servidor al crear el hermano
 */
router.post('/crearHermano',[
    check('nombres').notEmpty().withMessage("Ingresa el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingresa el campo apellidos"),
    check('nivelEstudio').notEmpty().withMessage("Ingresa el campo nivelEstudio"),
    check('institucion').notEmpty().withMessage("Ingresa el campo institucion"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
],HermanoCtrl.crearHermanos);

/**
 * @swagger
 * /listarHermanoId/{id}:
 *   get:
 *     summary: Obtener un hermano por ID
 *     tags: [Hermanos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del hermano
 *     responses:
 *       200:
 *         description: Hermano obtenido exitosamente
 *       404:
 *         description: Hermano no encontrado
 *       500:
 *         description: Error en el servidor al obtener el hermano
 */
router.get('/listarHermanoId/:id',HermanoCtrl.consultarId);

/**
 * @swagger
 * /actualizarHermano/{id}:
 *   put:
 *     summary: Actualizar información de un hermano
 *     tags: [Hermanos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del hermano a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - nivelEstudio
 *               - institucion
 *             properties:
 *               nombres:
 *                 type: string
 *                 description: Nombres del hermano
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del hermano
 *               nivelEstudio:
 *                 type: string
 *                 description: Nivel de estudio del hermano
 *               institucion:
 *                 type: string
 *                 description: Institución a la que asiste el hermano
 *     responses:
 *       200:
 *         description: Hermano actualizado exitosamente
 *       400:
 *         description: Error en la validación de los datos proporcionados
 *       404:
 *         description: Hermano no encontrado
 *       500:
 *         description: Error en el servidor al actualizar el hermano
 */
router.put('/actualizarHermano/:id',[
    check('nombres').notEmpty().withMessage("Ingresa el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingresa el campo apellidos"),
    check('nivelEstudio').notEmpty().withMessage("Ingresa el campo nivelEstudio"),
    check('institucion').notEmpty().withMessage("Ingresa el campo institucion"),
],HermanoCtrl.actualizarhermano);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar un hermano
 *     tags: [Hermanos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del hermano a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isActive
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de activación del hermano (activo/inactivo)
 *     responses:
 *       200:
 *         description: Hermano deshabilitado exitosamente
 *       400:
 *         description: Error en la validación de los datos proporcionados
 *       404:
 *         description: Hermano no encontrado
 *       500:
 *         description: Error en el servidor al deshabilitar el hermano
 */
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive"),
],HermanoCtrl.deshabilitar)




module.exports= router