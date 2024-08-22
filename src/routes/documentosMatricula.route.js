const { Router } = require('express');
const router = Router();
const DocumentosMatriculaCtrl = require('../controllers/documentosMatricula.controller');
const {check} = require("express-validator");

/**
 * @openapi
 * /documentosmatricula:
 *   post:
 *     tags:
 *       - DocumentosMatricula
 *     summary: "Crear un nuevo documento de matrícula"
 *     description: Crear un nuevo documento de matrícula con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "Título del documento"
 *               canViewType:
 *                 type: string
 *                 description: "Tipo de vista permitida"
 *               canViewValue:
 *                 type: string
 *                 description: "Valor de la vista permitida"
 *               documentoid:
 *                 type: string
 *                 description: "ID del documento asociado"
 *     responses:
 *       '201':
 *         description: Documento de matrícula creado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/',[
    check('title').notEmpty().withMessage("Ingresa el campo title"),
    check('canViewType').notEmpty().withMessage('Ingresa el campo canViewType'),
    check('canViewValue').notEmpty().withMessage('Ingresa el campo canViewValue'),
    check('documentoid').notEmpty().withMessage('.Ingresa el campo documentoid')
    ],DocumentosMatriculaCtrl.create);

/**
 * @openapi
 * /documentosmatricula:
 *   get:
 *     tags:
 *       - DocumentosMatricula
 *     summary: "Listar todos los documentos de matrícula"
 *     description: Obtener una lista de todos los documentos de matrícula almacenados.
 *     responses:
 *       '200':
 *         description: Lista de documentos de matrícula obtenida con éxito
 *       '500':
 *         description: Error al obtener los documentos
 */
router.get('/', DocumentosMatriculaCtrl.getDocuments);

/**
 * @openapi
 * /documentosmatricula/{id}:
 *   get:
 *     tags:
 *       - DocumentosMatricula
 *     summary: "Obtener documento de matrícula por ID"
 *     description: Obtener un documento de matrícula específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del documento de matrícula
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Documento de matrícula obtenido con éxito
 *       '404':
 *         description: Documento de matrícula no encontrado
 */
router.get('/:id', DocumentosMatriculaCtrl.getDocumentByID);

/**
 * @openapi
 * /documentosmatricula/student/{studentId}:
 *   get:
 *     tags:
 *       - DocumentosMatricula
 *     summary: "Obtener documentos de matrícula por ID del estudiante"
 *     description: Obtener todos los documentos de matrícula asociados a un estudiante específico.
 *     parameters:
 *       - name: studentId
 *         in: path
 *         required: true
 *         description: ID del estudiante
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Documentos de matrícula obtenidos con éxito
 *       '404':
 *         description: Estudiante no encontrado
 */
router.get('/student/:studentId', DocumentosMatriculaCtrl.getDocumentsByStudent);

/**
 * @openapi
 * /documentosmatricula/{id}:
 *   put:
 *     tags:
 *       - DocumentosMatricula
 *     summary: "Actualizar un documento de matrícula"
 *     description: Actualizar la información de un documento de matrícula existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del documento de matrícula a actualizar
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
 *                 description: "Estado del documento (activo o inactivo)"
 *               title:
 *                 type: string
 *                 description: "Título del documento"
 *               canViewType:
 *                 type: string
 *                 description: "Tipo de vista permitida"
 *               canViewValue:
 *                 type: string
 *                 description: "Valor de la vista permitida"
 *               documentoid:
 *                 type: string
 *                 description: "ID del documento asociado"
 *               canViewTuitionType:
 *                 type: string
 *                 description: "Tipo de vista de matrícula permitida"
 *     responses:
 *       '200':
 *         description: Documento de matrícula actualizado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Documento de matrícula no encontrado
 */
router.put('/:id',[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").isBoolean().withMessage("El campo es true o false."),
    check('title').notEmpty().withMessage("Ingresa el campo title"),
    check('canViewType').notEmpty().withMessage("Ingresa el campo canViewType"),
    check('canViewValue').notEmpty().withMessage("Ingresa el campo canViewValue"),
    check('documentoid').notEmpty().withMessage("Ingresa el campo documentoid"),
    check('canViewTuitionType').notEmpty().withMessage("Ingresa el campo canViewTuitionType")]
    ,DocumentosMatriculaCtrl.update);



module.exports = router