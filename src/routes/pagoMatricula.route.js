const {Router} = require('express');
const router = Router();
const pagoMatricula = require('../controllers/pagoMatricula.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /CrearPago:
 *   post:
 *     summary: Crea un nuevo pago.
 *     tags: [PagoMatricula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *                 description: Monto del pago.
 *               metodoPago:
 *                 type: string
 *                 description: Método de pago utilizado.
 *               jornada:
 *                 type: string
 *                 description: Jornada en la que se realiza el pago.
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente que realiza el pago.
 *               valMes:
 *                 type: number
 *                 description: Valor mensual del pago.
 *               meses:
 *                 type: integer
 *                 description: Número de meses que abarca el pago.
 *               idPension:
 *                 type: string
 *                 description: ID de la pensión asociada al pago.
 *             required:
 *               - monto
 *               - metodoPago
 *               - jornada
 *               - idAcudiente
 *               - valMes
 *               - meses
 *               - idPension
 *     responses:
 *       201:
 *         description: Pago creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 */

router.post('/CrearPago',[
    check('monto').notEmpty().withMessage("Ingresa el campo monto"),
    check('metodoPago').notEmpty().withMessage("Ingresa el campo metodoPago"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente"),
    check('valMes').notEmpty().withMessage("Ingresa el campo valMes"),
    check('meses').notEmpty().withMessage("Ingresa el campo meses"),
    check('idPension').notEmpty().withMessage("Ingresa el campo idPension")
],pagoMatricula.crearPago);

/**
 * @swagger
 * /GetPago:
 *   post:
 *     summary: Obtiene el pago de un acudiente.
 *     tags: [PagoMatricula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente para obtener el pago.
 *             required:
 *               - idAcudiente
 *     responses:
 *       200:
 *         description: Información del pago obtenida exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Pago no encontrado para el acudiente proporcionado.
 */

router.post('/GetPago',[
    check('idAcudiente').notEmpty().withMessage("Ingresa el campo idAcudiente")
],pagoMatricula.getPago);


module.exports= router