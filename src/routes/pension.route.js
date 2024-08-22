const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pension.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarPensiones:
 *   get:
 *     summary: Listar todas las pensiones
 *     tags:
 *       - Pensiones
 *     responses:
 *       200:
 *         description: Lista de pensiones obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarPensiones', PensionCtrl.consultarPensiones);

/**
 * @swagger
 * /listarPension/{idGrade}:
 *   get:
 *     summary: Obtener pensión por ID de grado
 *     tags:
 *       - Pensiones
 *     parameters:
 *       - in: path
 *         name: idGrade
 *         required: true
 *         description: ID del grado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pensión obtenida exitosamente
 *       404:
 *         description: Pensión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarPension/:idGrade', PensionCtrl.consultarPension);

/**
 * @swagger
 * /listarPensionId/{id}:
 *   get:
 *     summary: Obtener pensión por ID
 *     tags:
 *       - Pensiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la pensión
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pensión obtenida exitosamente
 *       404:
 *         description: Pensión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarPensionId/:id', PensionCtrl.consultarId);

/**
 * @swagger
 * /crearPension:
 *   post:
 *     summary: Crear una nueva pensión
 *     tags:
 *       - Pensiones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: Monto de la pensión
 *               discount:
 *                 type: number
 *                 description: Descuento aplicado
 *               use:
 *                 type: string
 *                 description: Uso de la pensión
 *               idGrade:
 *                 type: string
 *                 description: ID del grado
 *               interes:
 *                 type: number
 *                 description: Interés aplicado
 *     responses:
 *       201:
 *         description: Pensión creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearPension', [
    check("price").notEmpty().withMessage("Ingresa el campo price"),
    check("discount").notEmpty().withMessage("Ingresa el campo discount"),
    check("use").notEmpty().withMessage("Ingresa el campo use"),
    check("idGrade").notEmpty().withMessage("Ingresa el campo idGrade"),
    check("interes").notEmpty().withMessage("Ingresa el campo interes")
], PensionCtrl.crearPension);

/**
 * @swagger
 * /actualizarPension/{id}:
 *   put:
 *     summary: Actualizar una pensión existente
 *     tags:
 *       - Pensiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la pensión
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: Monto de la pensión
 *               discount:
 *                 type: number
 *                 description: Descuento aplicado
 *               idGrade:
 *                 type: string
 *                 description: ID del grado
 *     responses:
 *       200:
 *         description: Pensión actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Pensión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarPension/:id',
    [
        check("price").notEmpty().withMessage("Ingresa el campo price"),
        check("discount").notEmpty().withMessage("Ingresa el campo discount"),
        check("idGrade").notEmpty().withMessage("Ingresa el campo idGrade")
    ], PensionCtrl.actualizarPension);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar una pensión
 *     tags:
 *       - Pensiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la pensión
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
 *                 description: Estado de la pensión (true para activo, false para inactivo)
 *     responses:
 *       200:
 *         description: Pensión deshabilitada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Pensión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/deshabilitar/:id', [
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive")
], PensionCtrl.deshabilitar);

module.exports = router