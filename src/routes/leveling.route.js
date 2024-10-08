const {Router} = require('express');
const router = Router();
const LevelingCtrl = require('../controllers/leveling.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /leveling/listarLevelings:
 *   get:
 *     summary: Lista todos los cursos de nivelación.
 *     tags: [Leveling]
 *     responses:
 *       200:
 *         description: Lista de cursos de nivelación.
 */
router.get('/listarLevelings', LevelingCtrl.consultarLevelings);

/**
 * @swagger
 * /leveling/listarLeveling/{codigo}:
 *   get:
 *     summary: Obtiene un curso de nivelación por código.
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         description: Código del curso de nivelación.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del curso de nivelación.
 *       404:
 *         description: Curso de nivelación no encontrado.
 */
router.get('/listarLeveling/:codigo', LevelingCtrl.consultarLeveling);

/**
 * @swagger
 * /leveling/listarEstudiante/{codigo}:
 *   get:
 *     summary: Lista datos del estudiante por código.
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         description: Código del estudiante.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del estudiante.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/listarEstudiante/:codigo', LevelingCtrl.consultarStudentDatabases);

/**
 * @swagger
 * /leveling/listarLevelingId/{id}:
 *   get:
 *     summary: Obtiene un curso de nivelación por ID.
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del curso de nivelación.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del curso de nivelación.
 *       404:
 *         description: Curso de nivelación no encontrado.
 */
router.get('/listarLevelingId/:id', LevelingCtrl.consultarId);

/**
 * @swagger
 * /leveling/crearLeveling:
 *   post:
 *     summary: Crear un nuevo proceso de nivelación
 *     tags: [Leveling]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modalidadCurso:
 *                 type: string
 *                 description: Modalidad del curso de nivelación
 *               asignatura:
 *                 type: string
 *                 description: Asignatura en la que se realizará la nivelación
 *               isActive:
 *                 type: boolean
 *                 description: Estado activo del proceso de nivelación (true o false)
 *               estadoAprobado:
 *                 type: string
 *                 description: Estado de aprobación del proceso
 *               grado:
 *                 type: string
 *                 description: Grado del estudiante
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante que realiza la nivelación
 *     responses:
 *       201:
 *         description: Nivelación creada con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/crearLeveling', [
    check("modalidadCurso").notEmpty().withMessage("Ingresa el campo modalidadCurso"),
    check("asignatura").notEmpty().withMessage("Ingresa el campo asignatura"),
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Opciones true o false"),
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado"),
    check("grado").notEmpty().withMessage("Ingresa el campo grado"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], LevelingCtrl.crearLeveling);

/**
 * @swagger
 * /leveling/actualizarLeveling/{id}:
 *   put:
 *     summary: Actualizar un proceso de nivelación existente
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del proceso de nivelación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modalidadCurso:
 *                 type: string
 *                 description: Modalidad del curso de nivelación
 *               asignaturaisActive:
 *                 type: boolean
 *                 description: Estado activo de la asignatura en el proceso de nivelación
 *               estadoAprobado:
 *                 type: string
 *                 description: Estado de aprobación del proceso
 *               grado:
 *                 type: string
 *                 description: Grado del estudiante
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante que realiza la nivelación
 *     responses:
 *       200:
 *         description: Nivelación actualizada con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.put('/actualizarLeveling/:id', [
    check("modalidadCurso").notEmpty().withMessage("Ingresa el campo modalidadCurso"),
    check("asignaturaisActive").notEmpty().withMessage("Ingresa el campo asignaturaisActive"),
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado"),
    check("grado").notEmpty().withMessage("Ingresa el campo grado"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
], LevelingCtrl.actualizarLeveling);

/**
 * @swagger
 * /leveling/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un curso de nivelación por ID.
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del curso de nivelación.
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
 *                 description: Estado de activación del curso de nivelación.
 *     responses:
 *       200:
 *         description: Curso de nivelación deshabilitado.
 *       400:
 *         description: Error en los datos enviados.
 */
router.put('/deshabilitar/:id', [
    check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa True o False")
], LevelingCtrl.deshabilitar);

/**
 * @swagger
 * /leveling/cambiarEstado/{id}:
 *   put:
 *     summary: Cambia el estado de aprobación de un curso de nivelación por ID.
 *     tags: [Leveling]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del curso de nivelación.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estadoAprobado:
 *                 type: string
 *                 description: Estado de aprobación del curso de nivelación.
 *     responses:
 *       200:
 *         description: Estado del curso de nivelación cambiado.
 *       400:
 *         description: Error en los datos enviados.
 */
router.put('/cambiarEstado/:id', [
    check("estadoAprobado").notEmpty().withMessage("Ingresa el campo estadoAprobado")
], LevelingCtrl.cambiarEstado);


module.exports = router