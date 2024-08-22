const {Router} = require('express');
const router = Router();
const {check} = require("express-validator");
const inscriptionCtrl = require('../controllers/inscription.controller');

/**
 * @swagger
 * /inscription/listarInscription:
 *   get:
 *     summary: Listar todas las inscripciones
 *     tags: [Inscription]
 *     responses:
 *       200:
 *         description: Lista de inscripciones obtenida exitosamente
 *       500:
 *         description: Error en el servidor al obtener las inscripciones
 */
router.get('/listarInscription',inscriptionCtrl.consultarInscriptions);

/**
 * @swagger
 * /inscription/listarInscription/{id}:
 *   get:
 *     summary: Obtener una inscripción por ID
 *     tags: [Inscription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la inscripción a obtener
 *     responses:
 *       200:
 *         description: Inscripción obtenida exitosamente
 *       404:
 *         description: Inscripción no encontrada
 *       500:
 *         description: Error en el servidor al obtener la inscripción
 */
router.get('/listarInscription/:id',inscriptionCtrl.consultarInscription);

/**
 * @swagger
 * /inscription/crearInscription:
 *   post:
 *     summary: Crear una nueva inscripción
 *     tags: [Inscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: Precio de la inscripción
 *               description:
 *                 type: string
 *                 description: Descripción de la inscripción
 *               idUser:
 *                 type: integer
 *                 description: ID del usuario asociado
 *               idPeriod:
 *                 type: integer
 *                 description: ID del período asociado
 *     responses:
 *       201:
 *         description: Inscripción creada exitosamente
 *       400:
 *         description: Error en la solicitud al crear la inscripción
 *       500:
 *         description: Error en el servidor al crear la inscripción
 */
router.post('/crearInscription',[
    check("price").notEmpty().withMessage("Ingresa el campo price."),
    check("description").notEmpty().withMessage("Ingresa el campo description."),
    check("idUser").notEmpty().withMessage("Ingresa el campo idUser"),
    check("idPeriod").notEmpty().withMessage("Ingresa el campo idPeriod")
],inscriptionCtrl.crearInscription);

/**
 * @swagger
 * /inscription/actualizarInscription/{id}:
 *   put:
 *     summary: Actualizar una inscripción por ID
 *     tags: [Inscription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la inscripción a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: Precio de la inscripción
 *               description:
 *                 type: string
 *                 description: Descripción de la inscripción
 *               idUser:
 *                 type: integer
 *                 description: ID del usuario asociado
 *               idPeriod:
 *                 type: integer
 *                 description: ID del período asociado
 *     responses:
 *       200:
 *         description: Inscripción actualizada exitosamente
 *       400:
 *         description: Error en la solicitud al actualizar la inscripción
 *       404:
 *         description: Inscripción no encontrada
 *       500:
 *         description: Error en el servidor al actualizar la inscripción
 */
router.put('/actualizarInscription/:id' ,
    [
        check("price").notEmpty().withMessage("Ingresa el campo price."),
        check("description").notEmpty().withMessage("Ingresa el campo description."),
        check("idUser").notEmpty().withMessage("Ingresa el campo idUser"),
        check("idPeriod").notEmpty().withMessage("Ingresa el campo idPeriod")
    ]
    ,inscriptionCtrl.actualizarInscription)

/**
 * @swagger
 * /actualizarValorInscription:
 *   post:
 *     summary: Actualizar el valor de una inscripción
 *     tags: [Inscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: Nuevo precio de la inscripción
 *     responses:
 *       200:
 *         description: Valor de la inscripción actualizado exitosamente
 *       400:
 *         description: Error en la solicitud al actualizar el valor de la inscripción
 *       500:
 *         description: Error en el servidor al actualizar el valor de la inscripción
 */
router.post('/actualizarValorInscription' ,
    [
        check("price").notEmpty().withMessage("Ingresa el campo price.")
    ],inscriptionCtrl.actualizarValorInscription)



module.exports= router