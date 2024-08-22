const {Router} = require('express');
const router = Router();
const AttendingManagementCtrl = require('../controllers/attendingManagement.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarAttendingManagements:
 *   get:
 *     summary: Listar todas las gestiones de asistencia
 *     tags: [Attending Management]
 *     responses:
 *       200:
 *         description: Lista de gestiones de asistencia obtenida con éxito
 *       400:
 *         description: Error al obtener las gestiones de asistencia
 */
router.get('/listarAttendingManagements',AttendingManagementCtrl.consultarAttendingManagements);
/**
 * @swagger
 * /listarAttendingManagement/{nombres}:
 *   get:
 *     summary: Listar gestiones de asistencia por nombres
 *     tags: [Attending Management]
 *     parameters:
 *       - in: path
 *         name: nombres
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombres de la gestión de asistencia a consultar
 *     responses:
 *       200:
 *         description: Gestión de asistencia obtenida con éxito
 *       400:
 *         description: Error al obtener la gestión de asistencia
 */
router.get('/listarAttendingManagement/:nombres',AttendingManagementCtrl.consultarAttendingManagement);
/**
 * @swagger
 * /listarAttendingManagementId/{id}:
 *   get:
 *     summary: Listar gestión de asistencia por ID
 *     tags: [Attending Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la gestión de asistencia a consultar
 *     responses:
 *       200:
 *         description: Gestión de asistencia obtenida con éxito
 *       400:
 *         description: Error al obtener la gestión de asistencia
 */
router.get('/listarAttendingManagementId/:id',AttendingManagementCtrl.consultarId);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar gestión de asistencia por ID
 *     tags: [Attending Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la gestión de asistencia a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado activo/inactivo de la gestión de asistencia
 *     responses:
 *       200:
 *         description: Gestión de asistencia deshabilitada con éxito
 *       400:
 *         description: Error al deshabilitar la gestión de asistencia
 */
router.put('/deshabilitar/:id',
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Opciones true o false")
    ], AttendingManagementCtrl.deshabilitar)





module.exports= router