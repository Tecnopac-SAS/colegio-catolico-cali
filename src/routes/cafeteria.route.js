const {Router} = require('express');
const router = Router();
const CafeteriaCtrl = require('../controllers/cafeteria.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /cafeteria/listarCafeterias:
 *   get:
 *     summary: Listar todas las cafeterías
 *     tags: [Cafeteria]
 *     responses:
 *       200:
 *         description: Lista de cafeterías obtenida con éxito
 *       400:
 *         description: Error al obtener las cafeterías
 */
router.get('/listarCafeterias',CafeteriaCtrl.consultarCafeterias);

/**
 * @swagger
 * /cafeteria/listarCafeteria/{routeName}:
 *   get:
 *     summary: Consultar una cafetería por nombre de ruta
 *     tags: [Cafeteria]
 *     parameters:
 *       - in: path
 *         name: routeName
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la ruta de la cafetería a consultar
 *     responses:
 *       200:
 *         description: Cafetería obtenida con éxito
 *       400:
 *         description: Error al obtener la cafetería
 */
router.get('/listarCafeteria/:routeName',CafeteriaCtrl.consultarCafeteria);

/**
 * @swagger
 * /cafeteria/listarCafeteriaId/{id}:
 *   get:
 *     summary: Consultar una cafetería por ID
 *     tags: [Cafeteria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la cafetería a consultar
 *     responses:
 *       200:
 *         description: Cafetería obtenida con éxito
 *       400:
 *         description: Error al obtener la cafetería
 */
router.get('/listarCafeteriaId/:id',CafeteriaCtrl.consultarId);

/**
 * @swagger
 * /cafeteria/crearCafeteria:
 *   post:
 *     summary: Crear una nueva cafetería
 *     tags: [Cafeteria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descripción de la cafetería
 *                 example: "Cafetería en el centro de la ciudad"
 *               pay:
 *                 type: number
 *                 description: Monto de pago de la cafetería
 *                 example: 1500
 *     responses:
 *       200:
 *         description: Cafetería creada con éxito
 *       400:
 *         description: Error al crear la cafetería
 */
router.post('/crearCafeteria',[
    check('description').notEmpty().withMessage("Ingresa el campo description"),
    check('pay').notEmpty().withMessage("Ingresa el campo pay")
],CafeteriaCtrl.crearCafeteria);

/**
 * @swagger
 * /cafeteria/actualizarCafeteria/{id}:
 *   put:
 *     summary: Actualizar una cafetería existente
 *     tags: [Cafeteria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la cafetería a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descripción de la cafetería
 *                 example: "Cafetería en el centro de la ciudad"
 *               pay:
 *                 type: number
 *                 description: Monto de pago de la cafetería
 *                 example: 1500
 *     responses:
 *       200:
 *         description: Cafetería actualizada con éxito
 *       400:
 *         description: Error al actualizar la cafetería
 */
router.put('/actualizarCafeteria/:id',[
        check('description').notEmpty().withMessage("Ingresa el campo description"),
        check('pay').notEmpty().withMessage("Ingresa el campo pay")
    ]
    ,CafeteriaCtrl.actualizarCafeteria);

/**
 * @swagger
 * /cafeteria/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar una cafetería por ID
 *     tags: [Cafeteria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la cafetería a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado activo/inactivo de la cafetería
 *                 example: false
 *     responses:
 *       200:
 *         description: Cafetería deshabilitada con éxito
 *       400:
 *         description: Error al deshabilitar la cafetería
 */
router.put('/deshabilitar/:id',[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("Solo se permite true o false")
] ,CafeteriaCtrl.deshabilitar);


module.exports= router
