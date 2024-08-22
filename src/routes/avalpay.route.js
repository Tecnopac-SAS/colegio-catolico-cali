const {Router} = require('express');
const router = Router();
const avalpay = require('../controllers/avalpay.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Realizar un pago
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: Monto del pago
 *                 example: 100.50
 *               invoiceType:
 *                 type: string
 *                 description: Tipo de factura
 *                 example: "Factura Electrónica"
 *               portalURL:
 *                 type: string
 *                 description: URL del portal de pagos
 *                 example: "https://portal.pagos.com"
 *               desc:
 *                 type: string
 *                 description: Descripción del pago
 *                 example: "Pago por servicios"
 *     responses:
 *       200:
 *         description: Pago realizado con éxito
 *       400:
 *         description: Error en la solicitud de pago
 */
router.post('/payment', [
    check("amount").notEmpty().withMessage("Ingresa el campo amount"),
    check("invoiceType").notEmpty().withMessage("Ingresa el campo invoiceType"),
    check("portalURL").notEmpty().withMessage("Ingresa el campo portalURL"),
    check("desc").notEmpty().withMessage("Ingresa el campo desc")
], avalpay.payment);

/**
 * @swagger
 * /paymentStatus/{pmtId}:
 *   get:
 *     summary: Consultar el estado de un pago
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: pmtId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pago a consultar
 *     responses:
 *       200:
 *         description: Estado del pago obtenido con éxito
 *       400:
 *         description: Error al obtener el estado del pago
 */
router.get('/paymentStatus/:pmtId', avalpay.paymentStatus);

module.exports = router