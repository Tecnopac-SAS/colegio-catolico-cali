const {Router} = require('express');
const router = Router();
const PadreFamiliaCtrl = require('../controllers/padreFamilia.controller');
const {check} = require("express-validator");


/**
 * @swagger
 * /padres-familia/listarPadreFamilia:
 *   get:
 *     summary: Lista todos los padres de familia.
 *     tags: [PadreFamilia]
 *     responses:
 *       200:
 *         description: Lista de padres de familia.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PadreFamilia'
 */
router.get('/listarPadreFamilia',PadreFamiliaCtrl.consultarPadreFamilia);
router.post('/crearPadreFamilia',PadreFamiliaCtrl.crearPadreFamilia);
router.post('/crearMadreFamilia',PadreFamiliaCtrl.crearMadreFamilia);

/**
 * @swagger
 * /padres-familia/crearAcudiente:
 *   post:
 *     summary: Crea un nuevo acudiente.
 *     tags: [PadreFamilia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parentesco:
 *                 type: string
 *                 description: Parentesco del acudiente con el estudiante.
 *               estado:
 *                 type: string
 *                 description: Estado del acudiente.
 *               tipoDocumento:
 *                 type: string
 *                 description: Tipo de documento del acudiente.
 *               identificacion:
 *                 type: string
 *                 description: Identificación del acudiente.
 *               nombres:
 *                 type: string
 *                 description: Nombres del acudiente.
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del acudiente.
 *               profesion:
 *                 type: string
 *                 description: Profesión del acudiente.
 *               dondeTrabaja:
 *                 type: string
 *                 description: Lugar de trabajo del acudiente.
 *               cargo:
 *                 type: string
 *                 description: Cargo del acudiente en su trabajo.
 *               ingresoMensual:
 *                 type: number
 *                 description: Ingreso mensual del acudiente.
 *               correoElectronico:
 *                 type: string
 *                 description: Correo electrónico del acudiente.
 *               direccion:
 *                 type: string
 *                 description: Dirección del acudiente.
 *               telefono:
 *                 type: string
 *                 description: Teléfono del acudiente.
 *               celular:
 *                 type: string
 *                 description: Celular del acudiente.
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante asociado.
 *             required:
 *               - parentesco
 *               - estado
 *               - tipoDocumento
 *               - identificacion
 *               - nombres
 *               - apellidos
 *               - profesion
 *               - dondeTrabaja
 *               - cargo
 *               - ingresoMensual
 *               - correoElectronico
 *               - direccion
 *               - telefono
 *               - celular
 *               - idEstudiante
 *     responses:
 *       201:
 *         description: Acudiente creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 */
router.post('/crearAcudiente',[
    check('parentesco').notEmpty().withMessage('Ingrese el campo de parentesco'),
    check('estado').notEmpty().withMessage('Ingrese el campo de estado'),
    check('tipoDocumento').notEmpty().withMessage('Ingrese el campo de tipoDocumento'),
    check('identificacion').notEmpty().withMessage('Ingrese el campo de identificacion'),
    check('nombres').notEmpty().withMessage('Ingrese el campo de nombres'),
    check('apellidos').notEmpty().withMessage('Ingrese el campo de apellidos'),
    check('profesion').notEmpty().withMessage('Ingrese el campo de profesion'),
    check('dondeTrabaja').notEmpty().withMessage('Ingrese el campo de dondeTrabaja'),
    check('cargo').notEmpty().withMessage('Ingrese el campo de cargo'),
    check('ingresoMensual').notEmpty().withMessage('Ingrese el campo de ingresoMensual'),
    check('correoElectronico').notEmpty().withMessage('Ingrese el campo de correoElectronico'),
    check('direccion').notEmpty().withMessage('Ingrese el campo de direccion'),
    check('telefono').notEmpty().withMessage('Ingrese el campo de telefono'),
    check('celular').notEmpty().withMessage('Ingrese el campo de celular'),
    check('idEstudiante').notEmpty().withMessage('Ingrese el campo de idEstudiante')
],PadreFamiliaCtrl.crearAcudiente);

/**
 * @swagger
 * /padres-familia/crearResponsable:
 *   post:
 *     summary: Crea un nuevo responsable para un estudiante.
 *     tags: [PadreFamilia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipoPersona:
 *                 type: string
 *                 description: Tipo de persona (natural o jurídica).
 *               razonSocial:
 *                 type: string
 *                 description: Razón social del responsable.
 *               tipoDocumento:
 *                 type: string
 *                 description: Tipo de documento del responsable.
 *               identificacion:
 *                 type: string
 *                 description: Número de identificación del responsable.
 *               direccion:
 *                 type: string
 *                 description: Dirección del responsable.
 *               pais:
 *                 type: string
 *                 description: País de residencia del responsable.
 *               departamento:
 *                 type: string
 *                 description: Departamento o estado de residencia del responsable.
 *               ciudad:
 *                 type: string
 *                 description: Ciudad de residencia del responsable.
 *               correoElectronico:
 *                 type: string
 *                 description: Correo electrónico del responsable.
 *               celular:
 *                 type: string
 *                 description: Número de celular del responsable.
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante asociado al responsable.
 *               responsable:
 *                 type: string
 *                 description: Rol del responsable.
 *             required:
 *               - tipoPersona
 *               - razonSocial
 *               - tipoDocumento
 *               - identificacion
 *               - direccion
 *               - pais
 *               - departamento
 *               - ciudad
 *               - correoElectronico
 *               - celular
 *               - idEstudiante
 *               - responsable
 *     responses:
 *       201:
 *         description: Responsable creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 */

router.post('/crearResponsable',[
    check('tipoPersona').notEmpty().withMessage("Ingrese el campo tipoPersona"),
    check('razonSocial').notEmpty().withMessage("Ingrese el campo razonSocial"),
    check('tipoDocumento').notEmpty().withMessage("Ingrese el campo tipoDocumento"),
    check('identificacion').notEmpty().withMessage("Ingrese el campo identificacion"),
    check('direccion').notEmpty().withMessage("Ingrese el campo direccion"),
    check('pais').notEmpty().withMessage("Ingrese el campo pais"),
    check('departamento').notEmpty().withMessage("Ingrese el campo departamento"),
    check('ciudad').notEmpty().withMessage("Ingresa el campo ciudad"),
    check('correoElectronico').notEmpty().withMessage("Ingresa el campo correoElectronico"),
    check('celular').notEmpty().withMessage("Ingresa el campo celular"),
    check('idEstudiante').notEmpty().withMessage("Ingresa el campo idEstudiante"),
    check('responsable').notEmpty().withMessage("Ingresa el campo responsable")
],PadreFamiliaCtrl.crearResponsable);

/**
 * @swagger
 * /padres-familia/listarPadreFamiliaId/{id}:
 *   get:
 *     summary: Obtiene información de un padre de familia por ID.
 *     tags: [PadreFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del padre de familia.
 *     responses:
 *       200:
 *         description: Información del padre de familia obtenida exitosamente.
 *       404:
 *         description: Padre de familia no encontrado.
 */

router.get('/listarPadreFamiliaId/:id',PadreFamiliaCtrl.consultarId);

/**
 * @swagger
 * /padres-familia/getAllAcudiente/{id}:
 *   get:
 *     summary: Obtiene todos los acudientes asociados a un estudiante por ID.
 *     tags: [PadreFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante.
 *     responses:
 *       200:
 *         description: Lista de acudientes obtenida exitosamente.
 *       404:
 *         description: Estudiante no encontrado o no tiene acudientes.
 */

router.get('/getAllAcudiente/:id',PadreFamiliaCtrl.getAllAcudiente);

/**
 * @swagger
 * /padres-familia/actualizarPadreFamilia/{id}:
 *   put:
 *     summary: Actualiza la información de un padre de familia por ID.
 *     tags: [PadreFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del padre de familia.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 description: Estado del padre de familia.
 *               vive:
 *                 type: string
 *                 description: Indica si el padre de familia vive con el estudiante.
 *               tipoDocumento:
 *                 type: string
 *                 description: Tipo de documento de identidad.
 *               identificacion:
 *                 type: string
 *                 description: Número de identificación.
 *               nombres:
 *                 type: string
 *                 description: Nombres del padre de familia.
 *               apellidos:
 *                 type: string
 *                 description: Apellidos del padre de familia.
 *               profesion:
 *                 type: string
 *                 description: Profesión del padre de familia.
 *               dondeTrabaja:
 *                 type: string
 *                 description: Lugar de trabajo del padre de familia.
 *               cargo:
 *                 type: string
 *                 description: Cargo del padre de familia.
 *               ingresoMensual:
 *                 type: string
 *                 description: Ingreso mensual del padre de familia.
 *               correoElectronico:
 *                 type: string
 *                 description: Correo electrónico del padre de familia.
 *               direccion:
 *                 type: string
 *                 description: Dirección del padre de familia.
 *               telefono:
 *                 type: string
 *                 description: Número de teléfono del padre de familia.
 *               celular:
 *                 type: string
 *                 description: Número de celular del padre de familia.
 *             required:
 *               - estado
 *               - vive
 *               - tipoDocumento
 *               - identificacion
 *               - nombres
 *               - apellidos
 *               - profesion
 *               - dondeTrabaja
 *               - cargo
 *               - ingresoMensual
 *               - correoElectronico
 *               - direccion
 *               - telefono
 *               - celular
 *     responses:
 *       200:
 *         description: Información del padre de familia actualizada exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Padre de familia no encontrado.
 */

router.put('/actualizarPadreFamilia/:id',[
    check('estado').notEmpty().withMessage("Ingrese el campo estado"),
    check('vive').notEmpty().withMessage("Ingrese el campo vive"),
    check('tipoDocumento').notEmpty().withMessage("Ingrese el campo tipoDocumento"),
    check('identificacion').notEmpty().withMessage("Ingrese el campo identificacion"),
    check('nombres').notEmpty().withMessage("Ingrese el campo nombres"),
    check('apellidos').notEmpty().withMessage("Ingrese el campo apellidos"),
    check('profesion').notEmpty().withMessage("Ingrese el campo profesion"),
    check('dondeTrabaja').notEmpty().withMessage("Ingrese el campo dondeTrabaja"),
    check('cargo').notEmpty().withMessage("Ingrese el campo cargo"),
    check('ingresoMensual').notEmpty().withMessage("Ingrese el campo ingresoMensual"),
    check('correoElectronico').notEmpty().withMessage("Ingrese el campo correoElectronico"),
    check('direccion').notEmpty().withMessage("Ingrese el campo direccion"),
    check('telefono').notEmpty().withMessage("Ingrese el campo telefono"),
    check('celular').notEmpty().withMessage("Ingrese el campo celular")
],PadreFamiliaCtrl.actualizarPadreFamilia)

/**
 * @swagger
 * /padres-familia/actualizarAcudiente/{id}:
 *   put:
 *     summary: Actualiza la información de un acudiente por ID.
 *     tags: [PadreFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del acudiente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               acudiente:
 *                 type: string
 *                 description: Nombre del acudiente.
 *               estudiante:
 *                 type: string
 *                 description: ID del estudiante asociado.
 *               madre:
 *                 type: string
 *                 description: Nombre de la madre.
 *               padre:
 *                 type: string
 *                 description: Nombre del padre.
 *               responsable:
 *                 type: string
 *                 description: Nombre del responsable.
 *             required:
 *               - acudiente
 *               - estudiante
 *               - madre
 *               - padre
 *               - responsable
 *     responses:
 *       200:
 *         description: Información del acudiente actualizada exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Acudiente no encontrado.
 */

router.put('/actualizarAcudiente/:id',[
    check('acudiente').notEmpty().withMessage("Ingresa el campo acudiente"),
    check('estudiante').notEmpty().withMessage("Ingresa el campo estudiante"),
    check('madre').notEmpty().withMessage("Ingresa el campo madre"),
    check('padre').notEmpty().withMessage("Ingresa el campo padre"),
    check('responsable').notEmpty().withMessage("Ingresa el campo responsable")
],PadreFamiliaCtrl.actualizarAcudiente);

/**
 * @swagger
 * /padres-familia/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilita un registro por ID.
 *     tags: [PadreFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro a deshabilitar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de activación del registro.
 *             required:
 *               - isActive
 *     responses:
 *       200:
 *         description: Registro deshabilitado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       404:
 *         description: Registro no encontrado.
 */

router.put('/deshabilitar/:id' ,[
    check('isActive').notEmpty().withMessage("Ingresa el campo isActive").bail().isBoolean().withMessage("Opciones True o False")
],PadreFamiliaCtrl.deshabilitar)




module.exports= router