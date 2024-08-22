const {Router} = require('express');
const router = Router();
const PensionCtrl = require('../controllers/pensionPago.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /pago-pension/list:
 *   post:
 *     summary: Consulta las pensiones asociadas a un acudiente
 *     tags: [Pension Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente para consultar las pensiones
 *     responses:
 *       200:
 *         description: Lista de pensiones asociadas al acudiente obtenida exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/list', [
    check("idAcudiente").notEmpty().withMessage("Ingresa el campo idAcudiente")
], PensionCtrl.consultarPensiones);

/**
 * @swagger
 * /pago-pension/pagar/{tipo}:
 *   post:
 *     summary: Realiza el pago de pensiones
 *     tags: [Pension Pago]
 *     parameters:
 *       - in: path
 *         name: tipo
 *         required: true
 *         schema:
 *           type: string
 *         description: Tipo de pensión a pagar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pensiones:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idPension:
 *                       type: string
 *                       description: ID de la pensión
 *                     amount:
 *                       type: number
 *                       format: float
 *                       description: Monto a pagar
 *     responses:
 *       200:
 *         description: Pago de pensiones realizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos o error en el pago
 *       500:
 *         description: Error interno del servidor
 */
router.post('/pagar/:tipo', [
    check("pensiones").notEmpty().withMessage("Ingresa el campo pensiones")
], PensionCtrl.pagarPensiones);


module.exports = router