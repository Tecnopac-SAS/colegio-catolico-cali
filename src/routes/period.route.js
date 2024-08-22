const {Router} = require('express');
const router = Router();
const periodCtrl = require('../controllers/period.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarPeriodos:
 *   get:
 *     summary: Obtiene la lista de todos los períodos
 *     tags: [Period]
 *     responses:
 *       200:
 *         description: Lista de períodos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarPeriodos',periodCtrl.consultarPeriodos);

/**
 * @swagger
 * /listarPeriodo/{id}:
 *   get:
 *     summary: Obtiene un período por ID
 *     tags: [Period]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del período a obtener
 *     responses:
 *       200:
 *         description: Período obtenido exitosamente
 *       404:
 *         description: Período no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarPeriodo/:id',periodCtrl.consultarPeriodo);

/**
 * @swagger
 * /CrearPeriodo:
 *   post:
 *     summary: Crea un nuevo período
 *     tags: [Period]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: string
 *                 description: Edad asociada al período
 *               password:
 *                 type: string
 *                 description: Contraseña del período
 *               identifier:
 *                 type: string
 *                 description: Identificador del período
 *               consecutive:
 *                 type: string
 *                 description: Consecutivo del período
 *     responses:
 *       201:
 *         description: Período creado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/CrearPeriodo',[
    check('age').notEmpty().withMessage("Ingrese el campo age."),
    check('password').notEmpty().withMessage("Ingrese el campo password."),
    check('identifier').notEmpty().withMessage("Ingrese el campo identifier."),
    check('consecutive').notEmpty().withMessage("Ingrese el campo consecutive.")
], periodCtrl.crearPerido);

/**
 * @swagger
 * /actualizarPeriodo/{id}:
 *   put:
 *     summary: Actualiza un período existente
 *     tags: [Period]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del período a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: string
 *                 description: Edad asociada al período
 *               password:
 *                 type: string
 *                 description: Contraseña del período
 *               identifier:
 *                 type: string
 *                 description: Identificador del período
 *               consecutive:
 *                 type: string
 *                 description: Consecutivo del período
 *     responses:
 *       200:
 *         description: Período actualizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Período no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarPeriodo/:id',[
    check('age').notEmpty().withMessage("Ingrese el campo age."),
    check('password').notEmpty().withMessage("Ingrese el campo password."),
    check('identifier').notEmpty().withMessage("Ingrese el campo identifier."),
    check('consecutive').notEmpty().withMessage("Ingrese el campo consecutive.")
] ,periodCtrl.actualizarPeriodo)




module.exports= router