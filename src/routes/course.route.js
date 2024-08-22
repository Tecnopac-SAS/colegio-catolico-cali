const {Router} = require('express');
const router = Router();
const CourseCtrl = require('../controllers/courses.controller');
const {check} = require("express-validator");

/**
 * @openapi
 * /course/listarCourses:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: "Consultar todos los cursos"
 *     description: Obtener una lista de todos los cursos disponibles.
 *     responses:
 *       '200':
 *         description: Lista de cursos obtenida con éxito
 *       '500':
 *         description: Error al obtener los cursos
 */
router.get('/listarCourses', CourseCtrl.consultarCourses);

/**
 * @openapi
 * /course/listarCourse/{typeCourse}:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: "Consultar curso por tipo"
 *     description: Obtener un curso específico por su tipo.
 *     parameters:
 *       - name: typeCourse
 *         in: path
 *         required: true
 *         description: Tipo del curso
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Curso encontrado
 *       '404':
 *         description: Curso no encontrado
 */
router.get('/listarCourse/:typeCourse',CourseCtrl.consultarCourse);

/**
 * @openapi
 * /course/listarAsignature/{asignature}:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: "Consultar cursos por asignatura"
 *     description: Obtener cursos específicos por asignatura.
 *     parameters:
 *       - name: asignature
 *         in: path
 *         required: true
 *         description: Asignatura del curso
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cursos encontrados
 *       '404':
 *         description: Cursos no encontrados
 */
router.get('/listarAsignature/:asignature',CourseCtrl.consultarAsignature);

/**
 * @openapi
 * /course/listarAsignatureId/{id}:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: "Consultar curso por ID"
 *     description: Obtener un curso específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del curso
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Curso encontrado
 *       '404':
 *         description: Curso no encontrado
 */
router.get('/listarAsignatureId/:id',CourseCtrl.consultarId);

/**
 * @openapi
 * /courses/crearCourse:
 *   post:
 *     tags:
 *       - Cursos
 *     summary: "Crear un nuevo curso"
 *     description: Crear un nuevo curso con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               asignature:
 *                 type: string
 *               starDate:
 *                 type: string
 *                 format: date
 *               finalDate:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: number
 *               idTeacher:
 *                 type: string
 *               typeCourse:
 *                 type: string
 *               starHour:
 *                 type: string
 *                 format: time
 *               finalHour:
 *                 type: string
 *                 format: time
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Curso creado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/crearCourse',[
    check('asignature').notEmpty().withMessage('Ingresa el campo asignature'),
    check('starDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('finalDate').notEmpty().withMessage('Ingresa el campo finalDate'),
    check('price').notEmpty().withMessage('Ingrese el campo price'),
    check('idTeacher').notEmpty().withMessage('Ingrese el campo idTeacher'),
    check('typeCourse').notEmpty().withMessage('Ingrese el campo typeCourse'),
    check('starHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('finalHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('description').notEmpty().withMessage('Ingrese el campo description')
],CourseCtrl.crearCourse);

/**
 * @openapi
 * /course/actualizarCourse/{id}:
 *   put:
 *     tags:
 *       - Cursos
 *     summary: "Actualizar curso"
 *     description: Actualizar los datos de un curso existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del curso a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               asignature:
 *                 type: string
 *               starDate:
 *                 type: string
 *                 format: date
 *               finalDate:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: number
 *               idTeacher:
 *                 type: string
 *               typeCourse:
 *                 type: string
 *               starHour:
 *                 type: string
 *                 format: time
 *               finalHour:
 *                 type: string
 *                 format: time
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Curso actualizado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Curso no encontrado
 */
router.put('/actualizarCourse/:id',[
    check('asignature').notEmpty().withMessage('Ingresa el campo asignature'),
    check('starDate').notEmpty().withMessage('Ingresa el campo startDate'),
    check('finalDate').notEmpty().withMessage('Ingresa el campo finalDate'),
    check('price').notEmpty().withMessage('Ingrese el campo price'),
    check('idTeacher').notEmpty().withMessage('Ingrese el campo idTeacher'),
    check('typeCourse').notEmpty().withMessage('Ingrese el campo typeCourse'),
    check('starHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('finalHour').notEmpty().withMessage('Ingrese el campo starHour'),
    check('description').notEmpty().withMessage('Ingrese el campo description')
],CourseCtrl.actualizarCourse);

/**
 * @openapi
 * /course/deshabilitar/{id}:
 *   put:
 *     tags:
 *       - Cursos
 *     summary: "Deshabilitar curso"
 *     description: Deshabilitar un curso existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del curso a deshabilitar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Curso deshabilitado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Curso no encontrado
 */
router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage("Ingrese el campo isActive")
],CourseCtrl.deshabilitar);

/**
 * @openapi
 * /course/pago:
 *   post:
 *     tags:
 *       - Cursos
 *     summary: "Registrar un pago"
 *     description: Registrar el pago de un curso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *               idCourse:
 *                 type: string
 *               metodoPago:
 *                 type: string
 *               idEstudiante:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Pago registrado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/pago',[
    check('monto').notEmpty().withMessage("Ingrese el campo monto"),
    check('idCourse').notEmpty().withMessage("Ingrese el campo idCourse"),
    check('metodoPago').notEmpty().withMessage("Ingrese el campo metodoPago"),
    check('idEstudiante').notEmpty().withMessage("Ingrese el campo idEstudiante")
],CourseCtrl.pago);

module.exports= router