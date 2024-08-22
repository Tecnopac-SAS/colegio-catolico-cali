const {Router} = require('express');
const router = Router();
const TransportationRequestCtrl = require('../controllers/transportation-request.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /api/listarTransportationsRequests:
 *   get:
 *     summary: Lista todas las solicitudes de transporte
 *     tags: [TransportationRequest]
 *     responses:
 *       200:
 *         description: Lista de solicitudes de transporte obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la solicitud
 *                   estudianteid:
 *                     type: string
 *                     description: ID del estudiante
 *                   acudienteid:
 *                     type: string
 *                     description: ID del acudiente
 *                   estado:
 *                     type: string
 *                     description: Estado de la solicitud
 *       400:
 *         description: Error en la solicitud
 */
router.get('/listarTransportationsRequests',TransportationRequestCtrl.consultarTransportationsRequests);

/**
 * @swagger
 * /api/listarTransportationsRequest/{id}:
 *   get:
 *     summary: Obtiene una solicitud de transporte por su ID
 *     tags: [TransportationRequest]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la solicitud de transporte
 *     responses:
 *       200:
 *         description: Solicitud de transporte obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la solicitud
 *                 estudianteid:
 *                   type: string
 *                   description: ID del estudiante
 *                 acudienteid:
 *                   type: string
 *                   description: ID del acudiente
 *                 estado:
 *                   type: string
 *                   description: Estado de la solicitud
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Solicitud de transporte no encontrada
 */
router.get('/listarTransportationsRequest/:id',TransportationRequestCtrl.consultarTransportationRequest);

/**
 * @swagger
 * /api/listarTransportationsRequests/{estudianteid}/{acudienteid}:
 *   get:
 *     summary: Obtiene solicitudes de transporte por estudiante y acudiente
 *     tags: [TransportationRequest]
 *     parameters:
 *       - in: path
 *         name: estudianteid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante
 *       - in: path
 *         name: acudienteid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del acudiente
 *     responses:
 *       200:
 *         description: Solicitudes de transporte obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la solicitud
 *                   estado:
 *                     type: string
 *                     description: Estado de la solicitud
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Solicitudes de transporte no encontradas
 */
router.get('/listarTransportationsRequests/:estudianteid/:acudienteid' ,TransportationRequestCtrl.consultarTransportationByStudentRequest);

/**
 * @swagger
 * /api/aprobarSolicitud/{id}:
 *   put:
 *     summary: Aprueba una solicitud de transporte
 *     tags: [TransportationRequest]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la solicitud de transporte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 description: Estado de la solicitud
 *               routeid:
 *                 type: string
 *                 description: ID de la ruta
 *     responses:
 *       200:
 *         description: Solicitud aprobada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put('/aprobarSolicitud/:id',[
    check('estado').notEmpty().withMessage("Ingresa ele campo estado"),
    check('routeid').notEmpty().withMessage("Ingresa ele campo routeid")
],TransportationRequestCtrl.aprobarSolicitud);

/**
 * @swagger
 * /api/crearTransportationRequest:
 *   post:
 *     summary: Crea una nueva solicitud de transporte
 *     tags: [TransportationRequest]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeid:
 *                 type: string
 *                 description: ID de la ruta
 *               acudienteid:
 *                 type: string
 *                 description: ID del acudiente
 *               estado:
 *                 type: string
 *                 description: Estado de la solicitud
 *               routeType:
 *                 type: string
 *                 description: Tipo de ruta
 *               datosResponsable:
 *                 type: string
 *                 description: Datos del responsable
 *               direccion_recogida:
 *                 type: string
 *                 description: Dirección de recogida
 *               direccion_entrega:
 *                 type: string
 *                 description: Dirección de entrega
 *     responses:
 *       201:
 *         description: Solicitud de transporte creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/crearTransportationRequest',[
    check('routeid').notEmpty().withMessage("Ingresa ele campo routeid"),
    check('acudienteid').notEmpty().withMessage("Ingresa ele campo acudienteid"),
    check('estado').notEmpty().withMessage("Ingresa ele campo estado"),
    check('routeType').notEmpty().withMessage("Ingresa ele campo routeType"),
    check('datosResponsable').notEmpty().withMessage("Ingresa ele campo datosResponsable"),
    check('direccion_recogida').notEmpty().withMessage("Ingresa ele campo direccion_recogida"),
    check('direccion_entrega').notEmpty().withMessage("Ingresa ele campo direccion_entrega"),
],TransportationRequestCtrl.crearTransportationRequest);





module.exports= router