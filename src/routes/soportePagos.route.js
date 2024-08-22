const {Router} = require('express');
const router = Router();
const SoportePagosCtrl = require('../controllers/soportePagos.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /crearSoportePago:
 *   post:
 *     summary: Crea un nuevo soporte de pago
 *     tags: [SoportePagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentCode:
 *                 type: string
 *                 description: Código del pago
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente
 *               monto:
 *                 type: number
 *                 description: Monto del pago
 *               viaPago:
 *                 type: string
 *                 description: Vía de pago
 *               tipoPago:
 *                 type: string
 *                 description: Tipo de pago
 *             required:
 *               - paymentCode
 *               - idAcudiente
 *               - monto
 *               - viaPago
 *               - tipoPago
 *     responses:
 *       201:
 *         description: Soporte de pago creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearSoportePago',[
    check('paymentCode').notEmpty().withMessage("Ingresa el campo paymentCode"),
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente"),
    check("monto").notEmpty().withMessage("Ingresa el campo monto"),
    check("viaPago").notEmpty().withMessage("Ingresa el campo viaPago"),
    check("tipoPago").notEmpty().withMessage("Ingresa el campo tipoPago")
],SoportePagosCtrl.crearSoportePago);

/**
 * @swagger
 * /listarMisSoportesPagos/{idAcudiente}:
 *   get:
 *     summary: Lista los soportes de pagos de un acudiente específico
 *     tags: [SoportePagos]
 *     parameters:
 *       - in: path
 *         name: idAcudiente
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del acudiente para filtrar los soportes de pago
 *     responses:
 *       200:
 *         description: Lista de soportes de pago para el acudiente especificado
 *       404:
 *         description: No se encontraron soportes de pago para el acudiente especificado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarMisSoportesPagos/:idAcudiente',SoportePagosCtrl.listarMisSoportesPagos);

/**
 * @swagger
 * /listarSoportesPagos:
 *   get:
 *     summary: Lista todos los soportes de pagos
 *     tags: [SoportePagos]
 *     responses:
 *       200:
 *         description: Lista de todos los soportes de pago
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarSoportesPagos',SoportePagosCtrl.listarSoportesPagos);

module.exports= router