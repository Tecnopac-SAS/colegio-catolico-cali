const {Router} = require('express');
const router = Router();
const CanalReferenciaCtrl = require('../controllers/canalReferencia.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarCanalReferencias:
 *   get:
 *     summary: Listar todos los canales de referencia
 *     tags: [Canal Referencia]
 *     responses:
 *       200:
 *         description: Lista de canales de referencia obtenida con éxito
 *       400:
 *         description: Error al obtener los canales de referencia
 */
router.get('/listarCanalReferencias', CanalReferenciaCtrl.consultarCanalReferencias);

/**
 * @swagger
 * /listarCanalReferencia/{routeName}:
 *   get:
 *     summary: Consultar un canal de referencia por nombre de ruta
 *     tags: [Canal Referencia]
 *     parameters:
 *       - in: path
 *         name: routeName
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la ruta del canal de referencia
 *     responses:
 *       200:
 *         description: Canal de referencia obtenido con éxito
 *       400:
 *         description: Error al obtener el canal de referencia
 */
router.get('/listarCanalReferencia/:routeName', CanalReferenciaCtrl.consultarCanalReferencia);
/**
 * @swagger
 * /listarCanalReferenciaId/{id}:
 *   get:
 *     summary: Consultar un canal de referencia por ID
 *     tags: [Canal Referencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del canal de referencia
 *     responses:
 *       200:
 *         description: Canal de referencia obtenido con éxito
 *       400:
 *         description: Error al obtener el canal de referencia
 */
router.get('/listarCanalReferenciaId/:id', CanalReferenciaCtrl.consultarId);

/**
 * @swagger
 * /crearCanalReferencia:
 *   post:
 *     summary: Crear un nuevo canal de referencia
 *     tags: [Canal Referencia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comoSeEntero:
 *                 type: string
 *                 description: Cómo se enteró del canal
 *                 example: "A través de un amigo"
 *               comoSabe:
 *                 type: string
 *                 description: Cómo sabe sobre el canal
 *                 example: "Por redes sociales"
 *               porqueIngresar:
 *                 type: string
 *                 description: Razón para ingresar
 *                 example: "Buena reputación"
 *               nombreAcudiente:
 *                 type: string
 *                 description: Nombre del acudiente
 *                 example: "Juan Pérez"
 *               aceptaCompromisos:
 *                 type: string
 *                 description: Aceptación de compromisos
 *                 example: "Sí"
 *               estadoPago:
 *                 type: string
 *                 description: Estado del pago
 *                 example: "Pendiente"
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Canal de referencia creado con éxito
 *       400:
 *         description: Error al crear el canal de referencia
 */
router.post('/crearCanalReferencia',
    [
        check('comoSeEntero').notEmpty().withMessage("Ingresa el campo comoSeEntero"),
        check('comoSabe').notEmpty().withMessage("Ingresa el campo comoSabe"),
        check('porqueIngresar').notEmpty().withMessage("Ingresa el campo porqueIngresar"),
        check('nombreAcudiente').notEmpty().withMessage("Ingresa el campo nombreAcudiente"),
        check('aceptaCompromisos').notEmpty().withMessage("Ingresa el campo aceptaCompromisos"),
        check("estadoPago").notEmpty().withMessage("Ingresa el campo estadoPago"),
        check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
    ]
    , CanalReferenciaCtrl.crearCanalReferencia);

/**
 * @swagger
 * /actualizarCanalReferencia/{id}:
 *   put:
 *     summary: Actualizar un canal de referencia por ID
 *     tags: [Canal Referencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del canal de referencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comoSeEntero:
 *                 type: string
 *                 description: Cómo se enteró del canal
 *                 example: "A través de un amigo"
 *               comoSabe:
 *                 type: string
 *                 description: Cómo sabe sobre el canal
 *                 example: "Por redes sociales"
 *               porqueIngresar:
 *                 type: string
 *                 description: Razón para ingresar
 *                 example: "Buena reputación"
 *               nombreAcudiente:
 *                 type: string
 *                 description: Nombre del acudiente
 *                 example: "Juan Pérez"
 *               aceptaCompromisos:
 *                 type: string
 *                 description: Aceptación de compromisos
 *                 example: "Sí"
 *               estadoPago:
 *                 type: string
 *                 description: Estado del pago
 *                 example: "Pendiente"
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Canal de referencia actualizado con éxito
 *       400:
 *         description: Error al actualizar el canal de referencia
 */
router.put('/actualizarCanalReferencia/:id',
    check('comoSeEntero').notEmpty().withMessage("Ingresa el campo comoSeEntero"),
    check('comoSabe').notEmpty().withMessage("Ingresa el campo comoSabe"),
    check('porqueIngresar').notEmpty().withMessage("Ingresa el campo porqueIngresar"),
    check('nombreAcudiente').notEmpty().withMessage("Ingresa el campo nombreAcudiente"),
    check('aceptaCompromisos').notEmpty().withMessage("Ingresa el campo aceptaCompromisos"),
    check('estadoPago').notEmpty().withMessage("Ingresa el campo estadoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
    , CanalReferenciaCtrl.actualizarCanalReferencia)

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar un canal de referencia
 *     tags: [Canal Referencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del canal de referencia a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de activación del canal
 *                 example: false
 *     responses:
 *       200:
 *         description: Canal de referencia deshabilitado con éxito
 *       400:
 *         description: Error al deshabilitar el canal de referencia
 */
router.put('/deshabilitar/:id', [
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive")
], CanalReferenciaCtrl.deshabilitar)


module.exports = router