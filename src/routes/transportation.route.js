const {Router} = require('express');
const router = Router();
const TransportationCtrl = require('../controllers/transportation.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /transportation/listarTransportations:
 *   get:
 *     summary: Lista todas las rutas de transporte
 *     tags: [Transportation]
 *     responses:
 *       200:
 *         description: Lista de todas las rutas de transporte obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la ruta
 *                   routeName:
 *                     type: string
 *                     description: Nombre de la ruta
 *                   routeNumber:
 *                     type: string
 *                     description: Número de la ruta
 *                   responsible:
 *                     type: string
 *                     description: Responsable de la ruta
 *                   direccion_entrega:
 *                     type: string
 *                     description: Dirección de entrega
 *                   direccion_recogida:
 *                     type: string
 *                     description: Dirección de recogida
 *                   jornada:
 *                     type: string
 *                     description: Jornada de la ruta
 *                   descripcion:
 *                     type: string
 *                     description: Descripción de la ruta
 *                   routeType:
 *                     type: string
 *                     description: Tipo de ruta
 *                   price:
 *                     type: number
 *                     description: Precio de la ruta
 *                   cupo:
 *                     type: number
 *                     description: Cupo total
 *                   cupo_disponible:
 *                     type: number
 *                     description: Cupo disponible
 *       400:
 *         description: Error en la solicitud
 */
router.get('/listarTransportations',TransportationCtrl.consultarTransportationsAll);

/**
 * @swagger
 * /transportation/listarTransportations/{jornada}:
 *   get:
 *     summary: Lista las rutas de transporte por jornada
 *     tags: [Transportation]
 *     parameters:
 *       - in: path
 *         name: jornada
 *         required: true
 *         schema:
 *           type: string
 *         description: Jornada de la ruta
 *     responses:
 *       200:
 *         description: Lista de rutas de transporte obtenida exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Rutas no encontradas para la jornada proporcionada
 */
router.get('/listarTransportations/:jornada',TransportationCtrl.consultarTransportations);

/**
 * @swagger
 * /transportation/listarTransportation/{routeName}:
 *   get:
 *     summary: Obtiene una ruta de transporte por su nombre
 *     tags: [Transportation]
 *     parameters:
 *       - in: path
 *         name: routeName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la ruta
 *     responses:
 *       200:
 *         description: Ruta de transporte obtenida exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Ruta no encontrada
 */
router.get('/listarTransportation/:routeName',TransportationCtrl.consultarTransportation);

/**
 * @swagger
 * /transportation/listarTransportationId/{id}:
 *   get:
 *     summary: Obtiene una ruta de transporte por su ID
 *     tags: [Transportation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta
 *     responses:
 *       200:
 *         description: Ruta de transporte obtenida exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Ruta no encontrada
 */
router.get('/listarTransportationId/:id',TransportationCtrl.consultarId);

/**
 * @swagger
 * /transportation/crearTransportation:
 *   post:
 *     summary: Crea una nueva ruta de transporte
 *     tags: [Transportation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeName:
 *                 type: string
 *                 description: Nombre de la ruta
 *               routeNumber:
 *                 type: string
 *                 description: Número de la ruta
 *               responsible:
 *                 type: string
 *                 description: Responsable de la ruta
 *               direccion_entrega:
 *                 type: string
 *                 description: Dirección de entrega
 *               direccion_recogida:
 *                 type: string
 *                 description: Dirección de recogida
 *               jornada:
 *                 type: string
 *                 description: Jornada de la ruta
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ruta
 *               routeType:
 *                 type: string
 *                 description: Tipo de ruta
 *               price:
 *                 type: number
 *                 description: Precio de la ruta
 *               cupo:
 *                 type: number
 *                 description: Cupo total
 *               cupo_disponible:
 *                 type: number
 *                 description: Cupo disponible
 *     responses:
 *       201:
 *         description: Ruta de transporte creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/crearTransportation',
    check('routeName').notEmpty().withMessage("Ingresa el campo routeName"),
    check('routeNumber').notEmpty().withMessage("Ingresa el campo routeNumber"),
    check('responsible').notEmpty().withMessage("Ingresa el campo responsible"),
    check('direccion_entrega').notEmpty().withMessage("Ingresa el campo direccion_entrega"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa el campo direccion_recogida"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('descripcion').notEmpty().withMessage("Ingresa el campo descripcion"),
    check('routeType').notEmpty().withMessage("Ingresa el campo routeType"),
    check('price').notEmpty().withMessage("Ingresa el campo price"),
    check('cupo').notEmpty().withMessage("Ingresa el campo cupo"),
    check('cupo').notEmpty().withMessage("Ingresa el campo cupo_disponible")
    ,TransportationCtrl.crearTransportation);

/**
 * @swagger
 * /transportation/actualizarTransportation/{id}:
 *   put:
 *     summary: Actualiza una ruta de transporte existente
 *     tags: [Transportation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeName:
 *                 type: string
 *                 description: Nombre de la ruta
 *               routeNumber:
 *                 type: string
 *                 description: Número de la ruta
 *               responsible:
 *                 type: string
 *                 description: Responsable de la ruta
 *               direccion_recogida:
 *                 type: string
 *                 description: Dirección de recogida
 *               jornada:
 *                 type: string
 *                 description: Jornada de la ruta
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ruta
 *               routeType:
 *                 type: string
 *                 description: Tipo de ruta
 *               price:
 *                 type: number
 *                 description: Precio de la ruta
 *     responses:
 *       200:
 *         description: Ruta de transporte actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Ruta no encontrada
 */
router.put('/actualizarTransportation/:id',[
    check('routeName').notEmpty().withMessage("Ingresa el campo routeName"),
    check('routeNumber').notEmpty().withMessage("Ingresa el campo routeNumber"),
    check('responsible').notEmpty().withMessage("Ingresa el campo responsible"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa el campo direccion_recogida"),
    check('jornada').notEmpty().withMessage("Ingresa el campo jornada"),
    check('descripcion').notEmpty().withMessage("Ingresa el campo descripcion"),
    check('routeType').notEmpty().withMessage("Ingresa el campo routeType"),
    check('price').notEmpty().withMessage("Ingresa el campo price")
],TransportationCtrl.actualizarTransportation);

/**
 * @swagger
 * /transportation/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita una ruta de transporte
 *     tags: [Transportation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de la ruta (true para activa, false para deshabilitada)
 *     responses:
 *       200:
 *         description: Ruta de transporte deshabilitada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Ruta no encontrada
 */
router.put('/deshabilitar/:id',[
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa opciones true o false")
],TransportationCtrl.deshabilitar)





module.exports= router