const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pagosPresenciales.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Obtiene la lista de pagos presenciales.
 *     tags: [Pension]
 *     responses:
 *       200:
 *         description: Lista de pagos presenciales obtenida exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */

router.get('/list',PensionCtrl.consultarPagosPresenciales);

/**
 * @swagger
 * /pagar:
 *   post:
 *     summary: Crea un nuevo pago presencial.
 *     tags: [Pension]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentCode:
 *                 type: string
 *                 description: Código de pago.
 *               servicio:
 *                 type: string
 *                 description: Servicio asociado al pago.
 *               observacion:
 *                 type: string
 *                 description: Observación del pago.
 *               estado:
 *                 type: string
 *                 description: Estado del pago.
 *               monto:
 *                 type: number
 *                 description: Monto del pago.
 *             required:
 *               - paymentCode
 *               - servicio
 *               - observacion
 *               - estado
 *               - monto
 *     responses:
 *       201:
 *         description: Pago presencial creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       500:
 *         description: Error interno del servidor.
 */

router.post('/pagar',[
    check("paymentCode").notEmpty().withMessage("Ingresa el campo paymentCode"),
    check("servicio").notEmpty().withMessage("Ingresa el campo servicio"),
    check("observacion").notEmpty().withMessage("Ingresa el campo observacion"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("monto").notEmpty().withMessage("Ingresa el campo monto")
],PensionCtrl.crearPagoPresencial);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Actualiza un pago presencial existente.
 *     tags: [Pension]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del pago presencial a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentCode:
 *                 type: string
 *                 description: Código de pago.
 *               servicio:
 *                 type: string
 *                 description: Servicio asociado al pago.
 *               observacion:
 *                 type: string
 *                 description: Observación del pago.
 *               estado:
 *                 type: string
 *                 description: Estado del pago.
 *             required:
 *               - paymentCode
 *               - servicio
 *               - observacion
 *               - estado
 *     responses:
 *       200:
 *         description: Pago presencial actualizado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Pago presencial no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */

router.put('/:id',[
    check("paymentCode").notEmpty().withMessage("Ingresa el campo paymentCode"),
    check("servicio").notEmpty().withMessage("Ingresa el campo servicio"),
    check("observacion").notEmpty().withMessage("Ingresa el campo observacion"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado")
],PensionCtrl.updatePagoPresencial);

/**
 * @swagger
 * /status/{id}:
 *   put:
 *     summary: Actualiza el estado de un pago presencial.
 *     tags: [Pension]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del pago presencial a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 description: Nuevo estado del pago.
 *             required:
 *               - estado
 *     responses:
 *       200:
 *         description: Estado del pago presencial actualizado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Pago presencial no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */

router.put('/status/:id',[
    check("estado").notEmpty().withMessage("Ingresa el campo estado")
],PensionCtrl.updateStatusPagoPresencial);

module.exports= router