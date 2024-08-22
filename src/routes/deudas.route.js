const {Router} = require('express');
const router = Router();
const deudasCtrl = require('../controllers/deudas.controller');
const {check} = require("express-validator");
/**
 * @openapi
 * /deudas/listarDeudas:
 *   get:
 *     tags:
 *       - Deudas
 *     summary: "Consultar todas las deudas"
 *     description: Obtener una lista de todas las deudas registradas.
 *     responses:
 *       '200':
 *         description: Lista de deudas obtenida con éxito
 *       '500':
 *         description: Error al obtener las deudas
 */
router.get('/listarDeudas',deudasCtrl.consultarDeudas);

/**
 * @openapi
 * /deudas/listarDeuda/{id}:
 *   get:
 *     tags:
 *       - Deudas
 *     summary: "Consultar deuda por ID"
 *     description: Obtener una deuda específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la deuda
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deuda encontrada
 *       '404':
 *         description: Deuda no encontrada
 */
router.get('/listarDeuda/:id',deudasCtrl.consultarDeuda);

/**
 * @openapi
 * /deudas/crearDeudas:
 *   post:
 *     tags:
 *       - Deudas
 *     summary: "Crear una nueva deuda"
 *     description: Crear una nueva deuda con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deudaCode:
 *                 type: string
 *               concepto:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFinal:
 *                 type: string
 *                 format: date
 *               monto:
 *                 type: number
 *               cobro:
 *                 type: string
 *               estado:
 *                 type: string
 *               cobroValue:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Deuda creada con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/crearDeudas',[
    check('deudaCode').notEmpty().withMessage("Ingresa el campo deudaCode"),
    check('concepto').notEmpty().withMessage("Ingresa el campo concepto"),
    check('fechaInicio').notEmpty().withMessage("Ingresa el campo fechaInicio"),
    check('fechaFinal').notEmpty().withMessage('Ingresa el campo fechaFinal'),
    check('monto').notEmpty().withMessage("Ingresa el campos monto"),
    check('cobro').notEmpty().withMessage("Ingresa el campo estado"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("cobroValue").notEmpty().withMessage("Ingresa el campo cobroValue")
],deudasCtrl.crearDeuda);

/**
 * @openapi
 * /deudas/editarDeuda/{id}:
 *   put:
 *     tags:
 *       - Deudas
 *     summary: "Editar deuda"
 *     description: Editar los datos de una deuda existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la deuda a editar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deudaCode:
 *                 type: string
 *               concepto:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFinal:
 *                 type: string
 *                 format: date
 *               monto:
 *                 type: number
 *               cobro:
 *                 type: string
 *               estado:
 *                 type: string
 *               cobroValue:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Deuda actualizada con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Deuda no encontrada
 */
router.put('/editarDeuda/:id',[
    check('deudaCode').notEmpty().withMessage("Ingresa el campo deudaCode"),
    check('concepto').notEmpty().withMessage("Ingresa el campo concepto"),
    check('fechaInicio').notEmpty().withMessage("Ingresa el campo fechaInicio"),
    check('fechaFinal').notEmpty().withMessage('Ingresa el campo fechaFinal'),
    check('monto').notEmpty().withMessage("Ingresa el campos monto"),
    check('cobro').notEmpty().withMessage("Ingresa el campo estado"),
    check("estado").notEmpty().withMessage("Ingresa el campo estado"),
    check("cobroValue").notEmpty().withMessage("Ingresa el campo cobroValue")
],deudasCtrl.editarDeuda);

module.exports= router