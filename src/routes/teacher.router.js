const {Router} = require('express');
const router = Router();
const TeacherCtrl = require('../controllers/teacher.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /listarTeachers:
 *   get:
 *     summary: Lista todos los profesores
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: Lista de profesores
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTeachers',TeacherCtrl.consultarTeachers);

/**
 * @swagger
 * /listarTeacher/{name}:
 *   get:
 *     summary: Obtiene un profesor por nombre
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del profesor
 *     responses:
 *       200:
 *         description: Información del profesor
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTeacher/:name',TeacherCtrl.consultarTeacher);

/**
 * @swagger
 * /listarTeacherId/{id}:
 *   get:
 *     summary: Obtiene un profesor por ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del profesor
 *     responses:
 *       200:
 *         description: Información del profesor
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarTeacherId/:id',TeacherCtrl.consultarId);

/**
 * @swagger
 * /crearTeacher:
 *   post:
 *     summary: Crea un nuevo profesor
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del profesor
 *               course:
 *                 type: string
 *                 description: Curso que imparte
 *               email:
 *                 type: string
 *                 description: Correo electrónico del profesor
 *               number:
 *                 type: string
 *                 description: Número de contacto del profesor
 *     responses:
 *       201:
 *         description: Profesor creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearTeacher',
    [
        check("name").notEmpty().withMessage("Ingresa el campo name"),
        check("course").notEmpty().withMessage("Ingresa el campo course"),
        check("email").notEmpty().withMessage("Ingresa el campo email"),
        check("number").notEmpty().withMessage("Ingresa el campo number")
        //name,course,email,number
    ],TeacherCtrl.crearTeacher);

/**
 * @swagger
 * /actualizarTeacher/{id}:
 *   put:
 *     summary: Actualiza un profesor existente
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del profesor a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del profesor
 *               course:
 *                 type: string
 *                 description: Curso que imparte
 *               email:
 *                 type: string
 *                 description: Correo electrónico del profesor
 *               number:
 *                 type: string
 *                 description: Número de contacto del profesor
 *     responses:
 *       200:
 *         description: Profesor actualizado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarTeacher/:id',[
    check("name").notEmpty().withMessage("Ingresa el campo name"),
    check("course").notEmpty().withMessage("Ingresa el campo course"),
    check("email").notEmpty().withMessage("Ingresa el campo email"),
    check("number").notEmpty().withMessage("Ingresa el campo number")
],TeacherCtrl.actualizarTeacher);

/**
 * @swagger
 * /deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un profesor
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del profesor a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de habilitación del profesor (true o false)
 *     responses:
 *       200:
 *         description: Profesor deshabilitado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/deshabilitar/:id' ,[
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive")
],TeacherCtrl.deshabilitar)





module.exports= router