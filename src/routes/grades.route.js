const {Router} = require('express');
const router = Router();
const gradesCtrl = require('../controllers/grades.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /grades/listarGrades:
 *   get:
 *     summary: Listar todas las calificaciones
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: Lista de calificaciones obtenida exitosamente
 *       500:
 *         description: Error en el servidor al obtener la lista de calificaciones
 */
router.get('/listarGrades',gradesCtrl.consultarGrades);

/**
 * @swagger
 * /grades/CrearGrades:
 *   post:
 *     summary: Crear una nueva calificación
 *     tags: [Grades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - isActive
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descripción de la calificación
 *               isActive:
 *                 type: boolean
 *                 description: Estado de la calificación (activo/inactivo)
 *     responses:
 *       201:
 *         description: Calificación creada exitosamente
 *       400:
 *         description: Error en la validación de los datos proporcionados
 *       500:
 *         description: Error en el servidor al crear la calificación
 */
router.post('/CrearGrades', [
    check('description').notEmpty().withMessage("Ingresa el campo description"),
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive")
],gradesCtrl.crearGrades);

module.exports= router