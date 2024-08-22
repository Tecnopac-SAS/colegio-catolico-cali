const {Router} = require('express');
const router = Router();
const TechnicalCtrl = require('../controllers/technical.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarTechnicals:
 *   get:
 *     summary: Lista todos los técnicos
 *     tags: [Technical]
 *     responses:
 *       200:
 *         description: Lista de técnicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTechnicals',TechnicalCtrl.consultarTechnicals);

/**
 * @swagger
 * /listarTechnical/{course}:
 *   get:
 *     summary: Obtiene los técnicos para un curso específico
 *     tags: [Technical]
 *     parameters:
 *       - in: path
 *         name: course
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del curso para el cual obtener técnicos
 *     responses:
 *       200:
 *         description: Lista de técnicos para el curso obtenida exitosamente
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTechnical/:course',TechnicalCtrl.consultarTechnical);

/**
 * @swagger
 * /listarTechnicalId/{id}:
 *   get:
 *     summary: Obtiene un técnico específico por ID
 *     tags: [Technical]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del técnico a obtener
 *     responses:
 *       200:
 *         description: Técnico obtenido exitosamente
 *       404:
 *         description: Técnico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTechnicalId/:id',TechnicalCtrl.consultarId);

/**
 * @swagger
 * /crearTechnical:
 *   post:
 *     summary: Crea un nuevo técnico
 *     tags: [Technical]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 description: Nombre del curso
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio
 *               finalDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha final
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Precio del curso
 *               idTeacher:
 *                 type: string
 *                 description: ID del profesor
 *               startHour:
 *                 type: string
 *                 description: Hora de inicio
 *               finalHour:
 *                 type: string
 *                 description: Hora final
 *               description:
 *                 type: string
 *                 description: Descripción del curso
 *     responses:
 *       201:
 *         description: Técnico creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearTechnical',
    [
        check('course').notEmpty().withMessage("Ingrese el campo  course"),
        check('startDate').notEmpty().withMessage("Ingrese el campo startDate"),
        check('finalDate').notEmpty().withMessage("Ingrese el campo finalDate"),
        check('price').notEmpty().withMessage("Ingrese el campo price"),
        check('idTeacher').notEmpty().withMessage("Ingrese el campo idTeacher"),
        check('startHour').notEmpty().withMessage("Ingrese el campo startHour"),
        check('finalHour').notEmpty().withMessage("Ingrese el campo finalHour"),
        check('description').notEmpty().withMessage("Ingrese el campo description")
    ]
    ,TechnicalCtrl.crearTechnical);

/**
 * @swagger
 * /actualizarTechnical/{id}:
 *   put:
 *     summary: Actualiza un técnico existente
 *     tags: [Technical]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del técnico a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 description: Nombre del curso
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio
 *               finalDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha final
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Precio del curso
 *               idTeacher:
 *                 type: string
 *                 description: ID del profesor
 *               startHour:
 *                 type: string
 *                 description: Hora de inicio
 *               finalHour:
 *                 type: string
 *                 description: Hora final
 *               description:
 *                 type: string
 *                 description: Descripción del curso
 *     responses:
 *       200:
 *         description: Técnico actualizado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Técnico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarTechnical/:id',
    [
        check('course').notEmpty().withMessage("Ingrese el campo  course"),
        check('startDate').notEmpty().withMessage("Ingrese el campo startDate"),
        check('finalDate').notEmpty().withMessage("Ingrese el campo finalDate"),
        check('price').notEmpty().withMessage("Ingrese el campo price"),
        check('idTeacher').notEmpty().withMessage("Ingrese el campo idTeacher"),
        check('startHour').notEmpty().withMessage("Ingrese el campo startHour"),
        check('finalHour').notEmpty().withMessage("Ingrese el campo finalHour"),
        check('description').notEmpty().withMessage("Ingrese el campo description")
    ],TechnicalCtrl.actualizarTechnical);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un técnico
 *     tags: [Technical]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del técnico a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de habilitación del técnico (true o false)
 *     responses:
 *       200:
 *         description: Técnico deshabilitado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Técnico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/deshabilitar/:id' ,
    check('isActive').notEmpty().withMessage('Ingrese el campo isActive').bail().isBoolean().withMessage("Opciones true o false")
    ,TechnicalCtrl.deshabilitar);

/**
 * @swagger
 * /pago:
 *   post:
 *     summary: Realiza un pago para un técnico
 *     tags: [Technical]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *                 format: float
 *                 description: Monto del pago
 *               idTechnical:
 *                 type: string
 *                 description: ID del técnico al que se realiza el pago
 *               metodoPago:
 *                 type: string
 *                 description: Método de pago utilizado
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante que realiza el pago
 *     responses:
 *       201:
 *         description: Pago registrado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/pago',[
    check('monto').notEmpty().withMessage('Ingrese el campo monto'),
    check('idTechnical').notEmpty().withMessage('Ingrese el campo idTechnical'),
    check('metodoPago').notEmpty().withMessage('Ingrese el campo metodoPago'),
    check('idEstudiante').notEmpty().withMessage('Ingrese el campo idEstudiante')
],TechnicalCtrl.pago);





module.exports= router