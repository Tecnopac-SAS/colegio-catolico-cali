const {Router} = require('express');
const router = Router();
const extracurricularCtrl = require('../controllers/extracurricular.controller');
const uploadCtrl = require('../controllers/upload.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * tags:
 *   name: Extracurriculares
 *   description: Gestión de actividades extracurriculares
 */

/**
 * @swagger
 * /listarExtracurricular:
 *   get:
 *     summary: Listar todas las actividades extracurriculares
 *     tags: [Extracurriculares]
 *     responses:
 *       200:
 *         description: Lista de todas las actividades extracurriculares
 *       401:
 *         description: No autorizado
 */
router.get('/listarExtracurricular',extracurricularCtrl.consultarExtracurriculares);

/**
 * @swagger
 * /crearExtracurricular:
 *   post:
 *     summary: Crear una nueva actividad extracurricular
 *     tags: [Extracurriculares]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - activity
 *               - startDate
 *               - finalDate
 *               - price
 *               - idTeacher
 *               - imagen
 *             properties:
 *               activity:
 *                 type: string
 *                 description: Nombre de la actividad
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio de la actividad
 *               finalDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización de la actividad
 *               price:
 *                 type: number
 *                 description: Precio de la actividad
 *               information:
 *                 type: string
 *                 description: Información adicional de la actividad (opcional)
 *               schedule:
 *                 type: string
 *                 description: Horario de la actividad (opcional)
 *               idTeacher:
 *                 type: integer
 *                 description: ID del profesor encargado
 *               imagen:
 *                 type: string
 *                 description: URL de la imagen de la actividad
 *     responses:
 *       201:
 *         description: Actividad creada exitosamente
 *       400:
 *         description: Error en la validación
 */
router.post('/crearExtracurricular',[
    check('activity').notEmpty().withMessage("Ingresa el campo acitivity"),
    check('startDate').notEmpty().withMessage("Ingresa el campo startDate"),
    check('finalDate').notEmpty().withMessage("Ingreasa el campo finalDate"),
    check('price').notEmpty().withMessage("Ingresa el campo price"),
    check('information').optional(),
    check('schedule').optional(),
    check('idTeacher').notEmpty().withMessage("Ingresa el campo idTeacher"),
    check('imagen').notEmpty().withMessage("Ingresa el campo imagen")
],extracurricularCtrl.crearExtracurricular);

/**
 * @swagger
 * /pago:
 *   post:
 *     summary: Realizar el pago de una actividad extracurricular
 *     tags: [Extracurriculares]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - monto
 *               - idExtracurricular
 *               - metodoPago
 *               - idEstudiante
 *               - isActive
 *             properties:
 *               monto:
 *                 type: number
 *                 description: Monto del pago
 *               idExtracurricular:
 *                 type: integer
 *                 description: ID de la actividad extracurricular
 *               metodoPago:
 *                 type: string
 *                 description: Método de pago
 *               idEstudiante:
 *                 type: integer
 *                 description: ID del estudiante que realiza el pago
 *               isActive:
 *                 type: boolean
 *                 description: Estado de la inscripción
 *     responses:
 *       201:
 *         description: Pago realizado exitosamente
 *       400:
 *         description: Error en la validación
 */
router.post('/pago',
    check('monto').notEmpty().withMessage("Ingresa el campo monto"),
    check('idExtracurricular').notEmpty().withMessage("Ingresa el campo idExtracurricular"),
    check('metodoPago').notEmpty().withMessage("Ingresa el campo metodoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante"),
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("El campo es true o false")
    ,extracurricularCtrl.pago);

/**
 * @swagger
 * /misExtracurriculares:
 *   post:
 *     summary: Obtener actividades extracurriculares inscritas por un estudiante
 *     tags: [Extracurriculares]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idEstudiante
 *             properties:
 *               idEstudiante:
 *                 type: integer
 *                 description: ID del estudiante
 *     responses:
 *       200:
 *         description: Lista de actividades inscritas por el estudiante
 *       400:
 *         description: Error en la validación
 */
router.post('/misExtracurriculares',
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante")
    ,
    extracurricularCtrl.misExtracurriculares);

/**
 * @swagger
 * /listarExtracurricularId/{id}:
 *   get:
 *     summary: Consultar una actividad extracurricular por ID
 *     tags: [Extracurriculares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la actividad extracurricular
 *     responses:
 *       200:
 *         description: Información de la actividad extracurricular
 *       404:
 *         description: Actividad no encontrada
 */
router.get('/listarExtracurricularId/:id',extracurricularCtrl.consultarId);

/**
 * @swagger
 * /actualizarExtracurricular/{id}:
 *   put:
 *     summary: Actualizar una actividad extracurricular
 *     tags: [Extracurriculares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la actividad extracurricular
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - activity
 *               - startDate
 *               - finalDate
 *               - idTeacher
 *               - information
 *               - schedule
 *               - price
 *             properties:
 *               activity:
 *                 type: string
 *                 description: Nombre de la actividad
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio de la actividad
 *               finalDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización de la actividad
 *               idTeacher:
 *                 type: integer
 *                 description: ID del profesor encargado
 *               information:
 *                 type: string
 *                 description: Información adicional
 *               schedule:
 *                 type: string
 *                 description: Horario de la actividad
 *               imagen:
 *                 type: string
 *                 description: URL de la imagen de la actividad (opcional)
 *               price:
 *                 type: number
 *                 description: Precio de la actividad
 *     responses:
 *       200:
 *         description: Actividad actualizada exitosamente
 *       400:
 *         description: Error en la validación
 */
router.put('/actualizarExtracurricular/:id',[
    check("activity").notEmpty().withMessage("Ingresa el campo activity"),
    check("startDate").notEmpty().withMessage("Ingresa el campo startDate"),
    check("finalDate").notEmpty().withMessage("Ingresa el campo finalDate"),
    check("idTeacher").notEmpty().withMessage("Ingresa el campo idTeacher"),
    check("information").notEmpty().withMessage("Ingresa el campo information"),
    check("schedule").notEmpty().withMessage("Ingresa el campo schedule"),
    check("imagen").optional(),
    check("price").notEmpty().withMessage("Ingresa el campo price")
],extracurricularCtrl.actualizarExtracurricular);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar una actividad extracurricular
 *     tags: [Extracurriculares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la actividad extracurricular
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isActive
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de la actividad (true para activo, false para inactivo)
 *     responses:
 *       200:
 *         description: Actividad deshabilitada exitosamente
 *       400:
 *         description: Error en la validación
 */
router.put('/deshabilitar/:id' ,[
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive")
],extracurricularCtrl.deshabilitar);

/**
 * @swagger
 * /desvincularse/{id}:
 *   put:
 *     summary: Desvincular a un estudiante de una actividad extracurricular
 *     tags: [Extracurriculares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la actividad extracurricular
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idEstudiante
 *               - idExtracurricular
 *             properties:
 *               idEstudiante:
 *                 type: integer
 *                 description: ID del estudiante que se va a desvincular
 *               idExtracurricular:
 *                 type: integer
 *                 description: ID de la actividad extracurricular de la que se desvinculará el estudiante
 *     responses:
 *       200:
 *         description: Estudiante desvinculado exitosamente de la actividad extracurricular
 *       400:
 *         description: Error en la validación de los datos proporcionados
 *       404:
 *         description: Actividad extracurricular o estudiante no encontrados
 */
router.put('/desvincularse/:id' ,[
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante"),
    check("idExtracurricular").notEmpty().withMessage("Ingresa el campo idExtracurricular")
],extracurricularCtrl.desvincularse)




module.exports= router