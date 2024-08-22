const {Router} = require('express');
const router = Router();
const tuitionCtrl = require('../controllers/tuition.controller');
const {check} = require("express-validator");
/**
 * @swagger
 * /api/listarTuitions:
 *   get:
 *     summary: Lista todos los tipos de matrículas
 *     tags: [Tuition]
 *     responses:
 *       200:
 *         description: Lista de tipos de matrículas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID del tipo de matrícula
 *                   description:
 *                     type: string
 *                     description: Descripción del tipo de matrícula
 *       400:
 *         description: Error en la solicitud
 */
router.get('/listarTuitions',tuitionCtrl.consultarTuitions);

/**
 * @swagger
 * /api/listarTuition/{description}:
 *   get:
 *     summary: Obtiene un tipo de matrícula por su descripción
 *     tags: [Tuition]
 *     parameters:
 *       - in: path
 *         name: description
 *         required: true
 *         schema:
 *           type: string
 *         description: Descripción del tipo de matrícula
 *     responses:
 *       200:
 *         description: Tipo de matrícula obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del tipo de matrícula
 *                 description:
 *                   type: string
 *                   description: Descripción del tipo de matrícula
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Tipo de matrícula no encontrado
 */
router.get('/listarTuition/:description',tuitionCtrl.consultarTuition);

/**
 * @swagger
 * /api/CrearTuition:
 *   get:
 *     summary: Crea un nuevo tipo de matrícula
 *     tags: [Tuition]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tuition:
 *                 type: string
 *                 description: Descripción de la matrícula
 *                 example: "Matrícula regular"
 *     responses:
 *       200:
 *         description: Tipo de matrícula creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.get('/CrearTuition',
    [
        check('tuition').notEmpty().withMessage("Ingresa el campo tuition")
    ],tuitionCtrl.crearTuition);





module.exports= router