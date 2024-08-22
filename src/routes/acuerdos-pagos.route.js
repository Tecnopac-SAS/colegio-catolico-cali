const {Router} = require('express');
const router = Router();
const AcuerdosPagosCtrl = require('../controllers/acuerdos-pago.controller');
const {check} = require("express-validator");
/**
 * @swagger
 * /acuerdos-pagos/listarAcuerdosPagos:
 *   get:
 *     summary: Listar todos los acuerdos de pagos
 *     tags: [Acuerdos de Pagos]
 *     responses:
 *       200:
 *         description: Lista de acuerdos de pagos obtenida con éxito
 *       400:
 *         description: Error al obtener los acuerdos de pagos
 */
router.get('/listarAcuerdosPagos',AcuerdosPagosCtrl.consultarAcuerdosPagos);

/**
 * @swagger
 * /acuerdos-pagos/listarAcuerdoPagoCuotas/{id}:
 *   get:
 *     summary: Listar cuotas de un acuerdo de pago específico
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acuerdo de pago
 *     responses:
 *       200:
 *         description: Cuotas del acuerdo de pago obtenidas con éxito
 *       400:
 *         description: Error al obtener las cuotas del acuerdo de pago
 */
router.get('/listarAcuerdoPagoCuotas/:id',AcuerdosPagosCtrl.consultarAcuerdosPagosCuotas);

/**
 * @swagger
 * /acuerdos-pagos/listarAcuerdoPago/{id}:
 *   get:
 *     summary: Listar un acuerdo de pago específico
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acuerdo de pago
 *     responses:
 *       200:
 *         description: Acuerdo de pago obtenido con éxito
 *       400:
 *         description: Error al obtener el acuerdo de pago
 */
router.get('/listarAcuerdoPago/:id',AcuerdosPagosCtrl.consultarAcuerdoPago);

/**
 * @swagger
 * /acuerdos-pagos/listarAcuerdoPagoByAcudiente/{id}:
 *   get:
 *     summary: Listar acuerdos de pago por acudiente
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acudiente
 *     responses:
 *       200:
 *         description: Acuerdos de pago por acudiente obtenidos con éxito
 *       400:
 *         description: Error al obtener los acuerdos de pago por acudiente
 */
router.get('/listarAcuerdoPagoByAcudiente/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoByAcudiente);

/**
 * @swagger
 * /acuerdos-pagos/listarMatriculaAndPensionValue/{id}:
 *   get:
 *     summary: Consultar valores de matrícula y pensión
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acuerdo de pago
 *     responses:
 *       200:
 *         description: Valores de matrícula y pensión obtenidos con éxito
 *       400:
 *         description: Error al obtener los valores de matrícula y pensión
 */
router.get('/listarMatriculaAndPensionValue/:id',AcuerdosPagosCtrl.consultarMatriculaAndPensionValue);

/**
 * @swagger
 * /acuerdos-pagos/AcuerdoPago/{id}:
 *   put:
 *     summary: Editar un acuerdo de pago
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acuerdo de pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 description: Fecha del acuerdo de pago
 *               description:
 *                 type: string
 *                 description: Descripción del acuerdo de pago
 *               valor:
 *                 type: number
 *                 description: Valor del acuerdo de pago
 *               estado:
 *                 type: string
 *                 description: Estado del acuerdo de pago
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente relacionado con el acuerdo de pago
 *               cuotas:
 *                 type: number
 *                 description: Número de cuotas del acuerdo de pago
 *     responses:
 *       200:
 *         description: Acuerdo de pago editado con éxito
 *       400:
 *         description: Error al editar el acuerdo de pago
 */
router.put('/AcuerdoPago/:id',AcuerdosPagosCtrl.editarAcuerdoPago);

/**
 * @swagger
 * /acuerdos-pagos/AcuerdoPago:
 *   post:
 *     summary: Crear un nuevo acuerdo de pago
 *     tags: [Acuerdos de Pagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 description: Fecha del acuerdo de pago
 *               description:
 *                 type: string
 *                 description: Descripción del acuerdo de pago
 *               valor:
 *                 type: number
 *                 description: Valor del acuerdo de pago
 *               estado:
 *                 type: string
 *                 description: Estado del acuerdo de pago
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente relacionado con el acuerdo de pago
 *               cuotas:
 *                 type: number
 *                 description: Número de cuotas del acuerdo de pago
 *     responses:
 *       201:
 *         description: Acuerdo de pago creado con éxito
 *       400:
 *         description: Error al crear el acuerdo de pago
 */
router.post('/AcuerdoPago',
    [
        check("fecha").notEmpty().withMessage("Ingresar campo de fecha"),
        check("description").notEmpty().withMessage("Ingresa campo de description"),
        check("valor").notEmpty().withMessage("Ingresa campo de valor"),
        check("estado").notEmpty().withMessage("Ingresa el campo de estado"),
        check("idAcudiente").notEmpty().withMessage("Ingresa el campo de idAcudiente"),
        check("cuotas").notEmpty().withMessage("Ingresa el campo de cuotas")
    ]
    ,AcuerdosPagosCtrl.crearAcuerdoPago);

/**
 * @swagger
 * /acuerdos-pagos/AcuerdoPagoSearch/{dato}/{id}:
 *   get:
 *     summary: Buscar un acuerdo de pago por dato e ID
 *     tags: [Acuerdos de Pagos]
 *     parameters:
 *       - in: path
 *         name: dato
 *         schema:
 *           type: string
 *         required: true
 *         description: Dato a buscar
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acuerdo de pago
 *     responses:
 *       200:
 *         description: Acuerdo de pago encontrado con éxito
 *       400:
 *         description: Error al buscar el acuerdo de pago
 */
router.get('/AcuerdoPagoSearch/:dato/:id',AcuerdosPagosCtrl.consultarAcuerdoPagoSearch);

module.exports= router