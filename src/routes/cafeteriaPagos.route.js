const {Router} = require('express');
const router = Router();
const cafeteriaPagosCtrl = require('../controllers/cafeteriaPagos.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /crearPago:
 *   post:
 *     summary: Crear un nuevo pago
 *     tags: [Cafeteria Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 description: Datos del pago
 *                 example: "Datos del pago en JSON"
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante asociado al pago
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Pago creado con éxito
 *       400:
 *         description: Error al crear el pago
 */
router.post('/crearPago', [
    check('data').notEmpty().withMessage("Ingresa el campo data"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
], cafeteriaPagosCtrl.crearPago);

/**
 * @swagger
 * /getPagos:
 *   get:
 *     summary: Obtener todos los pagos
 *     tags: [Cafeteria Payments]
 *     responses:
 *       200:
 *         description: Lista de pagos obtenida con éxito
 *       400:
 *         description: Error al obtener los pagos
 */
router.get('/getPagos', cafeteriaPagosCtrl.getPagos);

/**
 * @swagger
 * /listPagoSearch/{dato}:
 *   get:
 *     summary: Buscar pagos por un dato específico
 *     tags: [Cafeteria Payments]
 *     parameters:
 *       - in: path
 *         name: dato
 *         schema:
 *           type: string
 *         required: true
 *         description: Dato para buscar pagos
 *     responses:
 *       200:
 *         description: Resultado de la búsqueda de pagos obtenido con éxito
 *       400:
 *         description: Error al buscar pagos
 */
router.get('/listPagoSearch/:dato', cafeteriaPagosCtrl.listPagoSearch);

/**
 * @swagger
 * /entregarTarjeta/{id}:
 *   get:
 *     summary: Entregar tarjeta a un estudiante
 *     tags: [Cafeteria Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pago o del estudiante asociado a la tarjeta
 *     responses:
 *       200:
 *         description: Tarjeta entregada con éxito
 *       400:
 *         description: Error al entregar la tarjeta
 */
router.get('/entregarTarjeta/:id', cafeteriaPagosCtrl.entregarTarjeta);


module.exports = router
