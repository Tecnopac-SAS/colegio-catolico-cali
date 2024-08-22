const {Router} = require('express');
const router = Router();
const SchoolYearCtrl = require('../controllers/schoolYear.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /schoolYear/listarSchoolYears:
 *   get:
 *     summary: Lista todos los años escolares
 *     tags: [SchoolYear]
 *     responses:
 *       200:
 *         description: Lista de todos los años escolares
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarSchoolYears', SchoolYearCtrl.consultarSchoolYears);

/**
 * @swagger
 * /schoolYear/listarSchoolYear/{code}:
 *   get:
 *     summary: Obtiene un año escolar específico por código
 *     tags: [SchoolYear]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: Código del año escolar a consultar
 *     responses:
 *       200:
 *         description: Año escolar específico
 *       404:
 *         description: Año escolar no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarSchoolYear/:code', SchoolYearCtrl.consultarSchoolYear);

/**
 * @swagger
 * /schoolYear/listarSchoolYearId/{id}:
 *   get:
 *     summary: Obtiene un año escolar específico por ID
 *     tags: [SchoolYear]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del año escolar a consultar
 *     responses:
 *       200:
 *         description: Año escolar específico
 *       404:
 *         description: Año escolar no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarSchoolYearId/:id', SchoolYearCtrl.consultarId);

/**
 * @swagger
 * /schoolYear/crearSchoolYear:
 *   post:
 *     summary: Crea un nuevo año escolar
 *     tags: [SchoolYear]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Código del año escolar
 *               age:
 *                 type: integer
 *                 description: Edad del año escolar
 *     responses:
 *       201:
 *         description: Año escolar creado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearSchoolYear', [
    check("code").notEmpty().withMessage("Ingresa el campo code"),
    check("age").notEmpty().withMessage("Ingresa el campo age")
], SchoolYearCtrl.crearSchoolYear);

/**
 * @swagger
 * /schoolYear/actualizarSchoolYear/{id}:
 *   put:
 *     summary: Actualiza un año escolar existente
 *     tags: [SchoolYear]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del año escolar a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Código del año escolar
 *               age:
 *                 type: integer
 *                 description: Edad del año escolar
 *     responses:
 *       200:
 *         description: Año escolar actualizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Año escolar no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarSchoolYear/:id', [
    check("code").notEmpty().withMessage("Ingresa el campo code"),
    check("age").notEmpty().withMessage("Ingresa el campo age")
], SchoolYearCtrl.actualizarSchoolYear);

/**
 * @swagger
 * /schoolYear/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un año escolar
 *     tags: [SchoolYear]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del año escolar a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado del año escolar (true o false)
 *     responses:
 *       200:
 *         description: Año escolar deshabilitado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Año escolar no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/deshabilitar/:id', [
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive")
], SchoolYearCtrl.deshabilitar);

/**
 * @swagger
 * /schoolYear/actualizarAnioLectivo:
 *   post:
 *     summary: Actualiza el año lectivo
 *     tags: [SchoolYear]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del año lectivo a actualizar
 *               password:
 *                 type: string
 *                 description: Contraseña para la actualización
 *     responses:
 *       200:
 *         description: Año lectivo actualizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Año lectivo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/actualizarAnioLectivo',
    check("id").notEmpty().withMessage("Ingresa el campo id"),
    check("password").notEmpty().withMessage("Ingresa el campo password")
    , SchoolYearCtrl.cambioAnioLectivo)


module.exports = router