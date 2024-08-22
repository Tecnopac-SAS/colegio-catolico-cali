const {Router} = require('express');
const router = Router();
const StudentDatabaseCtrl = require('../controllers/studentDatabase.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /studentDatabase/listarStudentDatabases:
 *   get:
 *     summary: Lista todas las bases de datos de estudiantes
 *     tags: [StudentDatabase]
 *     responses:
 *       200:
 *         description: Lista de bases de datos de estudiantes
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarStudentDatabases',StudentDatabaseCtrl.consultarStudentDatabases);

/**
 * @swagger
 * /studentDatabase/get-pension:
 *   post:
 *     summary: Obtiene información sobre la pensión para un estudiante
 *     tags: [StudentDatabase]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *                 description: ID del estudiante
 *     responses:
 *       200:
 *         description: Información sobre la pensión del estudiante
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/get-pension',StudentDatabaseCtrl.getPension);

/**
 * @swagger
 * /studentDatabase/get-matricula:
 *   post:
 *     summary: Obtiene información sobre la matrícula para un estudiante
 *     tags: [StudentDatabase]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *                 description: ID del estudiante
 *     responses:
 *       200:
 *         description: Información sobre la matrícula del estudiante
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/get-matricula',StudentDatabaseCtrl.getMatricula);

/**
 * @swagger
 * /studentDatabase/listarStudentDatabase/{nombres}/{estadoEstudiante}:
 *   get:
 *     summary: Obtiene la base de datos de un estudiante por nombre y estado
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: nombres
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del estudiante
 *       - in: path
 *         name: estadoEstudiante
 *         required: true
 *         schema:
 *           type: string
 *         description: Estado del estudiante
 *     responses:
 *       200:
 *         description: Información del estudiante
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarStudentDatabase/:nombres/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentDatabase);

/**
 * @swagger
 * /studentDatabase/listarStudentDatabaseEstado/{estadoEstudiante}:
 *   get:
 *     summary: Obtiene la base de datos de estudiantes por estado
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: estadoEstudiante
 *         required: true
 *         schema:
 *           type: string
 *         description: Estado del estudiante
 *     responses:
 *       200:
 *         description: Lista de estudiantes en el estado proporcionado
 *       404:
 *         description: No se encontraron estudiantes con el estado proporcionado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarStudentDatabaseEstado/:estadoEstudiante',StudentDatabaseCtrl.consultarStudentEstados);

/**
 * @swagger
 * /studentDatabase/listarStudentDatabaseId/{id}:
 *   get:
 *     summary: Obtiene la base de datos de un estudiante por ID
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Información del estudiante
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarStudentDatabaseId/:id',StudentDatabaseCtrl.consultarId);

/**
 * @swagger
 * /studentDatabase/crearStudentDatabase:
 *   post:
 *     summary: Crea una nueva base de datos de estudiante
 *     tags: [StudentDatabase]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *                 description: Código del estudiante
 *               nombres:
 *                 type: string
 *                 description: Nombres del estudiante
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del estudiante
 *               tipoDocumento:
 *                 type: string
 *                 description: Tipo de documento
 *               expedicion:
 *                 type: string
 *                 description: Lugar de expedición del documento
 *               lugarNacimiento:
 *                 type: string
 *                 description: Lugar de nacimiento
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento
 *               edad:
 *                 type: integer
 *                 description: Edad del estudiante
 *               direccion:
 *                 type: string
 *                 description: Dirección del estudiante
 *               tipoDireccion:
 *                 type: string
 *                 description: Tipo de dirección (urbana, rural, etc.)
 *               barrio:
 *                 type: string
 *                 description: Barrio del estudiante
 *               estrato:
 *                 type: integer
 *                 description: Estrato socioeconómico
 *               telefono:
 *                 type: string
 *                 description: Teléfono de contacto
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico
 *               tipoCupo:
 *                 type: string
 *                 description: Tipo de cupo (normal, subsidio, etc.)
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearStudentDatabase',
    [
        check('codigo').notEmpty().withMessage('Ingresa el campo codigo'),
        check('nombres').notEmpty().withMessage('Ingresa el campo nombres'),
        check('apellidos').notEmpty().withMessage('Ingresa el campo apellidos'),
        check('tipoDocumento').notEmpty().withMessage('Ingresa el campo tipoDocumento'),
        check('expedicion').notEmpty().withMessage('Ingresa el campo expedicion'),
        check('lugarNacimiento').notEmpty().withMessage('Ingresa el campo ligarNacimineto'),
        check('fechaNacimiento').notEmpty().withMessage('Ingresa el campo fechaNacimiento'),
        check('edad').notEmpty().withMessage('Ingresa el campo de edad'),
        check('direccion').notEmpty().withMessage('Ingresa el campo tipo direccion'),
        check('tipoDireccion').notEmpty().withMessage('Ingresa el campo tipoDireccion'),
        check('barrio').notEmpty().withMessage('Ingresa el campo barrio'),
        check('estrato').notEmpty().withMessage('Ingresa el campo estrato'),
        check('telefono').notEmpty().withMessage('Ingresa el campo telefono'),
        check('correo').notEmpty().withMessage('Ingresa el campo correo'),
        check('tipoCupo').notEmpty().withMessage('Ingresa el campo tipoCupo')
    ]
    ,StudentDatabaseCtrl.crearStudentDatabase);

/**
 * @swagger
 * /studentDatabase/actualizarStudentDatabase/{id}:
 *   put:
 *     summary: Actualiza los datos de un estudiante
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *                 description: Código del estudiante
 *               nombres:
 *                 type: string
 *                 description: Nombres del estudiante
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del estudiante
 *               grado:
 *                 type: string
 *                 description: Grado del estudiante
 *               identificacion:
 *                 type: string
 *                 description: Identificación del estudiante
 *               tipoDocumento:
 *                 type: string
 *                 description: Tipo de documento
 *               expedicion:
 *                 type: string
 *                 description: Lugar de expedición del documento
 *               lugarNacimiento:
 *                 type: string
 *                 description: Lugar de nacimiento
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento
 *               edad:
 *                 type: integer
 *                 description: Edad del estudiante
 *               direccion:
 *                 type: string
 *                 description: Dirección del estudiante
 *               tipoDireccion:
 *                 type: string
 *                 description: Tipo de dirección (urbana, rural, etc.)
 *               barrio:
 *                 type: string
 *                 description: Barrio del estudiante
 *               estrato:
 *                 type: integer
 *                 description: Estrato socioeconómico
 *               telefono:
 *                 type: string
 *                 description: Teléfono de contacto
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico
 *               tipoCupo:
 *                 type: string
 *                 description: Tipo de cupo (normal, subsidio, etc.)
 *               viveCon:
 *                 type: string
 *                 description: Con quién vive el estudiante
 *               idGrade:
 *                 type: string
 *                 description: ID del grado del estudiante
 *     responses:
 *       200:
 *         description: Estudiante actualizado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarStudentDatabase/:id',[
        check('codigo').notEmpty().withMessage('Ingresa el campo codigo'),
        check('nombres').notEmpty().withMessage('Ingresa el campo nombres'),
        check('apellidos').notEmpty().withMessage('Ingresa el campo apellidos'),
        check('grado').notEmpty().withMessage('Ingresa el campo grado'),
        check('identificacion').notEmpty().withMessage('Ingresa el campo identificacion'),
        check('tipoDocumento').notEmpty().withMessage('Ingresa el campo tipoDocumento'),
        check('expedicion').notEmpty().withMessage('Ingresa el campo expedicion'),
        check('lugarNacimiento').notEmpty().withMessage('Ingresa el campo ligarNacimineto'),
        check('fechaNacimiento').notEmpty().withMessage('Ingresa el campo fechaNacimiento'),
        check('edad').notEmpty().withMessage('Ingresa el campo de edad'),
        check('direccion').notEmpty().withMessage('Ingresa el campo tipo direccion'),
        check('tipoDireccion').notEmpty().withMessage('Ingresa el campo tipoDireccion'),
        check('barrio').notEmpty().withMessage('Ingresa el campo barrio'),
        check('estrato').notEmpty().withMessage('Ingresa el campo estrato'),
        check('telefono').notEmpty().withMessage('Ingresa el campo telefono'),
        check('correo').notEmpty().withMessage('Ingresa el campo correo'),
        check('tipoCupo').notEmpty().withMessage('Ingresa el campo tipoCupo'),
        check('viveCon').notEmpty().withMessage('Ingresa el campo vivieCon'),
        check('idGrade').notEmpty().withMessage('Ingresa el campo idGrade')

],StudentDatabaseCtrl.actualizarStudentDatabase);

/**
 * @swagger
 * /studentDatabase/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un estudiante
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante a deshabilitar
 *     responses:
 *       200:
 *         description: Estudiante deshabilitado exitosamente
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/deshabilitar/:id' ,StudentDatabaseCtrl.deshabilitar);

/**
 * @swagger
 * /studentDatabase/cambiarEstado/{id}:
 *   put:
 *     summary: Cambia el estado de un estudiante
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante cuyo estado se cambiará
 *       - in: query
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *           enum: [activo, inactivo]
 *         description: Nuevo estado del estudiante
 *     responses:
 *       200:
 *         description: Estado del estudiante cambiado exitosamente
 *       400:
 *         description: Datos inválidos o estado no válido
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/cambiarEstado/:id' ,StudentDatabaseCtrl.cambiarEstado);

/**
 * @swagger
 * /studentDatabase/contarEstado/{estadoEstudiante}:
 *   get:
 *     summary: Cuenta el número de estudiantes por estado
 *     tags: [StudentDatabase]
 *     parameters:
 *       - in: path
 *         name: estadoEstudiante
 *         required: true
 *         schema:
 *           type: string
 *           enum: [activo, inactivo]
 *         description: Estado del estudiante para contar
 *     responses:
 *       200:
 *         description: Cantidad de estudiantes por estado
 *       400:
 *         description: Estado inválido
 *       500:
 *         description: Error interno del servidor
 */
router.get('/contarEstado/:estadoEstudiante',StudentDatabaseCtrl.studentDatabaseCount);




module.exports= router