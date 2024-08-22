const {Router} = require('express');
const router = Router();
const historialAcademicoCtrl = require('../controllers/historialAcademico.controller');
const {check} = require("express-validator");
/**
 * @swagger
 * /historialAcademico/listarhistorialAcademico:
 *   get:
 *     summary: Lista todo el historial académico.
 *     tags: [Historial Académico]
 *     responses:
 *       200:
 *         description: Lista de historial académico.
 */
router.get('/listarhistorialAcademico',historialAcademicoCtrl.consultarhistorialAcademicoes);

/**
 * @swagger
 * /historialAcademico/crearhistorialAcademico:
 *   post:
 *     summary: Crear un nuevo historial académico
 *     tags: [Historial Académico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               presscolar:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Datos del nivel preescolar
 *               primaria:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Datos del nivel primaria
 *               bachillerato:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Datos del nivel bachillerato
 *               anioAnterior:
 *                 type: string
 *                 description: Año anterior cursado
 *               motivoRetiro:
 *                 type: string
 *                 description: Motivo de retiro en caso de haberlo
 *               repeticionAnio:
 *                 type: string
 *                 description: Información sobre la repetición de un año académico
 *               distincionAcademica:
 *                 type: string
 *                 description: Información sobre distinciones académicas obtenidas
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante al que pertenece el historial
 *     responses:
 *       200:
 *         description: Historial académico creado con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/crearhistorialAcademico',[
    check("presscolar").notEmpty().withMessage("Ingrese el campo presscolar.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("primaria").notEmpty().withMessage("Ingrese el campo primaria.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("bachillerato").notEmpty().withMessage("Ingrese el campo bachillerato.").bail().isArray().withMessage("El elemento tiene que ser un array"),
    check("anioAnterior").notEmpty().withMessage("Ingrese el campo anioAnterior"),
    check("motivoRetiro").notEmpty().withMessage("Ingrese el campo motivoRetiro"),
    check("repeticionAnio").notEmpty().withMessage("Ingrese el campo repeticionAnio"),
    check("distincionAcademica").notEmpty().withMessage("Ingrese el campo distincionAcademica"),
    check("idEstudiante").notEmpty().withMessage("Ingresa el campo idEstudiante")
],historialAcademicoCtrl.crearhistorialAcademico);

/**
 * @swagger
 * /historialAcademico/listarhistorialAcademicoId/{id}:
 *   get:
 *     summary: Obtiene un historial académico por ID.
 *     tags: [Historial Académico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del historial académico.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del historial académico.
 *       404:
 *         description: Historial académico no encontrado.
 */
router.get('/listarhistorialAcademicoId/:id',historialAcademicoCtrl.consultarId);

/**
 * @swagger
 * /crearhistorialAcademico:
 *   post:
 *     summary: Crear un nuevo historial académico
 *     tags: [Historial Académico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               preescolar:
 *                 type: string
 *                 description: Información del nivel preescolar
 *               gradoCursadoPreescolar:
 *                 type: string
 *                 description: Grado cursado en el nivel preescolar
 *               gradoCursadoJardin:
 *                 type: string
 *                 description: Grado cursado en el jardín
 *               gradoCursadoTransicion:
 *                 type: string
 *                 description: Grado cursado en la transición
 *               primaria:
 *                 type: string
 *                 description: Información del nivel primaria
 *               gradoCursadoPrimaria1:
 *                 type: string
 *                 description: Grado cursado en primaria 1
 *               gradoCursadoPrimaria2:
 *                 type: string
 *                 description: Grado cursado en primaria 2
 *               gradoCursadoPrimaria3:
 *                 type: string
 *                 description: Grado cursado en primaria 3
 *               gradoCursadoPrimaria4:
 *                 type: string
 *                 description: Grado cursado en primaria 4
 *               gradoCursadoPrimaria5:
 *                 type: string
 *                 description: Grado cursado en primaria 5
 *               bachillerato:
 *                 type: string
 *                 description: Información del nivel bachillerato
 *               gradoCursadoBachillerato6:
 *                 type: string
 *                 description: Grado cursado en bachillerato 6
 *               gradoCursadoBachillerato7:
 *                 type: string
 *                 description: Grado cursado en bachillerato 7
 *               gradoCursadoBachillerato8:
 *                 type: string
 *                 description: Grado cursado en bachillerato 8
 *               anioAnterior:
 *                 type: string
 *                 description: Año anterior cursado
 *               motivoRetiro:
 *                 type: string
 *                 description: Motivo de retiro en caso de haberlo
 *               repeticionAnio:
 *                 type: string
 *                 description: Información sobre la repetición de un año académico
 *               distincionAcademica:
 *                 type: string
 *                 description: Información sobre distinciones académicas obtenidas
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante al que pertenece el historial
 *     responses:
 *       200:
 *         description: Historial académico creado con éxito
 *       400:
 *         description: Error en los datos enviados
 */
router.put('/actualizarhistorialAcademico/:id',[
    check("preescolar").notEmpty().withMessage("Ingresa el campo presscolar"),
    check("gradoCursadoPreescolar").notEmpty().withMessage("Ingresa el campo gradoCursadoPreescolar"),
    check("gradoCursadoJardin").notEmpty().withMessage("Ingresa el campo gradoCursadoJardin"),
    check("gradoCursadoTransicion").notEmpty().withMessage("Ingresa el campo gradoCursadoTransicion"),
    check("primaria").notEmpty().withMessage("Ingresa el campo primaria"),
    check("gradoCursadoPrimaria1").optional(),
    check("gradoCursadoPrimaria2").optional(),
    check("gradoCursadoPrimaria3").optional(),
    check("gradoCursadoPrimaria4").optional(),
    check("gradoCursadoPrimaria5").optional(),
    check("bachillerato").notEmpty().withMessage("Ingresa el campo bachillerato"),
    check("gradoCursadoBachillerato6").optional(),
    check("gradoCursadoBachillerato7").optional(),
    check("gradoCursadoBachillerato8").optional(),
    check("anioAnterior").optional(),
    check("motivoRetiro").optional(),
    check("repeticionAnio").optional(),
    check("distincionAcademica").optional()
],historialAcademicoCtrl.actualizarhistorialAcademico);

/**
 * @swagger
 * /historialAcademico/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un historial académico por ID.
 *     tags: [Historial Académico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del historial académico.
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
 *                 description: Estado de activación del historial académico.
 *     responses:
 *       200:
 *         description: Historial académico deshabilitado.
 *       400:
 *         description: Error en los datos enviados.
 */
router.put('/deshabilitar/:id' ,
    [
        check("isActive").notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Ingresa True o False")
    ],historialAcademicoCtrl.deshabilitar)

module.exports= router