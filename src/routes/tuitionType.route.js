const {Router} = require('express');
const router = Router();
const tuitionTypeCtrl = require('../controllers/tuitionType.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /tuition/listarTuitionTypes:
 *   get:
 *     summary: Lista todos los tipos de matrícula
 *     tags: [Tuition Type]
 *     responses:
 *       200:
 *         description: Lista de tipos de matrícula
 */
router.get('/listarTuitionTypes',tuitionTypeCtrl.consultarTuitionType);

/**
 * @swagger
 * /tuition/CrearTuitionType:
 *   post:
 *     summary: Crea un nuevo tipo de matrícula
 *     tags: [Tuition Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - grade
 *               - startDate
 *               - orginary_price
 *               - extraordinary_startDate
 *               - extraordinary_finalDate
 *               - extraordinary_price
 *             properties:
 *               grade:
 *                 type: string
 *                 example: "Primero"
 *               startDate:
 *                 type: string
 *                 format: date
 *               orginary_price:
 *                 type: number
 *               extraordinary_startDate:
 *                 type: string
 *                 format: date
 *               extraordinary_finalDate:
 *                 type: string
 *                 format: date
 *               extraordinary_price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tipo de matrícula creado exitosamente
 */
router.get('/listarTuition/:description',tuitionTypeCtrl.consultarTuition);

/**
 * @swagger
 * /tuition/listarTuitionId/{id}:
 *   get:
 *     summary: Obtiene un tipo de matrícula por ID
 *     tags: [Tuition Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de matrícula
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipo de matrícula encontrado
 *       404:
 *         description: Tipo de matrícula no encontrado
 */
router.get('/listarTuitionId/:id',tuitionTypeCtrl.consultarId);

/**
 * @swagger
 * /tuition/CrearTuitionType:
 *   post:
 *     summary: Crea un nuevo tipo de matrícula
 *     tags: [Tuition Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - grade
 *               - startDate
 *               - orginary_price
 *               - extraordinary_startDate
 *               - extraordinary_finalDate
 *               - extraordinary_price
 *             properties:
 *               grade:
 *                 type: string
 *                 example: "Primero"
 *               startDate:
 *                 type: string
 *                 format: date
 *               orginary_price:
 *                 type: number
 *               extraordinary_startDate:
 *                 type: string
 *                 format: date
 *               extraordinary_finalDate:
 *                 type: string
 *                 format: date
 *               extraordinary_price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tipo de matrícula creado exitosamente
 */
router.post('/CrearTuitionType',[
    check('grade').notEmpty().withMessage('Ingresa el campo grade'),
    check('startDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('orginary_price').notEmpty().withMessage('Ingresa el campo ordinary_price'),
    check('extraordinary_startDate').notEmpty().withMessage('Ingresa el campo extraordinary_startDate'),
    check('extraordinary_finalDate').notEmpty().withMessage('Ingresa el campo extraordinary_finalDate'),
    check('extraordinary_price').notEmpty().withMessage('Ingresa el campo extraordinary_price')
],tuitionTypeCtrl.crearTuitionType);

/**
 * @swagger
 * /tuition/actualizarTuition/{id}:
 *   put:
 *     summary: Actualiza un tipo de matrícula por ID
 *     tags: [Tuition Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de matrícula
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - grade
 *               - startDate
 *               - orginary_price
 *               - extraordinary_startDate
 *               - extraordinary_finalDate
 *               - extraordinary_price
 *             properties:
 *               grade:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               orginary_price:
 *                 type: number
 *               extraordinary_startDate:
 *                 type: string
 *                 format: date
 *               extraordinary_finalDate:
 *                 type: string
 *                 format: date
 *               extraordinary_price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Tipo de matrícula actualizado exitosamente
 *       404:
 *         description: Tipo de matrícula no encontrado
 */
router.put('/actualizarTuition/:id',[
    check('grade').notEmpty().withMessage('Ingresa el campo grade'),
    check('startDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('orginary_price').notEmpty().withMessage('Ingresa el campo ordinary_price'),
    check('extraordinary_startDate').notEmpty().withMessage('Ingresa el campo extraordinary_startDate'),
    check('extraordinary_finalDate').notEmpty().withMessage('Ingresa el campo extraordinary_finalDate'),
    check('extraordinary_price').notEmpty().withMessage('Ingresa el campo extraordinary_price')
],tuitionTypeCtrl.actualizarTuition)

/**
 * @swagger
 * /tuition/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un tipo de matrícula por ID
 *     tags: [Tuition Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de matrícula
 *         schema:
 *           type: string
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
 *     responses:
 *       200:
 *         description: Tipo de matrícula deshabilitado exitosamente
 *       404:
 *         description: Tipo de matrícula no encontrado
 */
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage('Ingresa el campo isActive')
],tuitionTypeCtrl.deshabilitar)


module.exports= router