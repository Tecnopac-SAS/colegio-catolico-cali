const {Router} = require('express');
const router = Router();
const acudienteCtrl = require('../controllers/acudiente.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /acudiente/descBolsillo:
 *   post:
 *     summary: Descuento del bolsillo de un acudiente
 *     tags: [Acudiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente
 *               cant:
 *                 type: number
 *                 description: Cantidad a descontar
 *     responses:
 *       200:
 *         description: Descuento aplicado con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/descBolsillo', [
    check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente"),
    check("cant").notEmpty().withMessage("Ingrese el campo de cant")
], acudienteCtrl.descuentoBolsillo);

/**
 * @swagger
 * /acudiente/addBolsillo:
 *   put:
 *     summary: Añadir dinero al bolsillo de un acudiente
 *     tags: [Acudiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente
 *               cant:
 *                 type: number
 *                 description: Cantidad a añadir
 *     responses:
 *       200:
 *         description: Cantidad añadida con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.put('/addBolsillo',
    [
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente "),
        check('cant').notEmpty().withMessage("Ingresa el campo de cant")
    ], acudienteCtrl.actualizarBolsillo);

/**
 * @swagger
 * /acudiente/getBolsillo:
 *   post:
 *     summary: Obtener el bolsillo de un acudiente
 *     tags: [Acudiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente
 *     responses:
 *       200:
 *         description: Bolsillo obtenido con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/getBolsillo', [
    check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente"),
], acudienteCtrl.getBolsillo);

/**
 * @swagger
 * /acudiente/getAcudiente:
 *   get:
 *     summary: Obtener información de un acudiente
 *     tags: [Acudiente]
 *     parameters:
 *       - in: query
 *         name: idAcudiente
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del acudiente
 *     responses:
 *       200:
 *         description: Información del acudiente obtenida con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.get('/getAcudiente',
    [
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente")
    ], acudienteCtrl.getAcudiente);

/**
 * @swagger
 * /acudiente/getAcudientebyEstudiante:
 *   post:
 *     summary: Obtener acudiente por ID de estudiante
 *     tags: [Acudiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante
 *     responses:
 *       200:
 *         description: Acudiente obtenido con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/getAcudientebyEstudiante',
    [
        check('idEstudiante').notEmpty().withMessage("Ingrese el campo de idEstudiante"),
    ], acudienteCtrl.getAcudientebyEstudiante);

/**
 * @swagger
 * /acudiente/actualizarAcudiente:
 *   put:
 *     summary: Actualizar la información de un acudiente
 *     tags: [Acudiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAcudiente:
 *                 type: string
 *                 description: ID del acudiente
 *               nombres:
 *                 type: string
 *                 description: Nombres del acudiente
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del acudiente
 *               cargo:
 *                 type: string
 *                 description: Cargo del acudiente
 *               celular:
 *                 type: string
 *                 description: Celular del acudiente
 *               correoElectronico:
 *                 type: string
 *                 description: Correo electrónico del acudiente
 *               direccion:
 *                 type: string
 *                 description: Dirección del acudiente
 *               dondeTrabaja:
 *                 type: string
 *                 description: Lugar de trabajo del acudiente
 *               identificacion:
 *                 type: string
 *                 description: Identificación del acudiente
 *               ingresoMensual:
 *                 type: number
 *                 description: Ingreso mensual del acudiente
 *               parentesco:
 *                 type: string
 *                 description: Parentesco con el estudiante
 *               profesion:
 *                 type: string
 *                 description: Profesión del acudiente
 *               telefono:
 *                 type: string
 *                 description: Teléfono del acudiente
 *     responses:
 *       200:
 *         description: Información del acudiente actualizada con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.put('/actualizarAcudiente', [
        check('idAcudiente').notEmpty().withMessage("Ingrese el campo de idAcudiente "),
        check('nombres').notEmpty().withMessage("Ingrese el campo de nombres"),
        check('apellidos').notEmpty().withMessage("Ingrese el campo de apellidos"),
        check('cargo').notEmpty().withMessage("Ingresa el campo de cargo "),
        check('celular').notEmpty().withMessage("Ingresa el campo de celular"),
        check('correoElectronico').notEmpty().withMessage("Ingresa el campo correoElectronico"),
        check('direccion').notEmpty().withMessage("Ingresa el campo de direccion"),
        check('dondeTrabaja').notEmpty().withMessage("Ingresa el campo de dondeTrabaja"),
        check('identificacion').notEmpty().withMessage("Ingresa el campo de identification"),
        check('ingresoMensual').notEmpty().withMessage("Ingresa el campo de ingresoMensual"),
        check('parentesco').notEmpty().withMessage("Ingresa el campo parentesco"),
        check('profesion').notEmpty().withMessage("Ingresa el campo profesion"),
        check('telefono').notEmpty().withMessage("Ingresa el campo tipoDocumento")
    ],
    acudienteCtrl.actualizarAcudiente);

module.exports = router