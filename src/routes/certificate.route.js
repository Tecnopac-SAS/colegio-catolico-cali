const {Router} = require('express');
const router = Router();
const CertificateCtrl = require('../controllers/certificates.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /certificate/listarCertificates:
 *   get:
 *     summary: Listar todos los certificados
 *     tags: [Certificates]
 *     responses:
 *       200:
 *         description: Lista de certificados obtenida con éxito
 *       400:
 *         description: Error al obtener los certificados
 */
router.get('/listarCertificates',CertificateCtrl.consultarCertificates);


/**
 * @swagger
 * /certificate/listCertificatesInscription:
 *   get:
 *     summary: Listar todas las inscripciones de certificados
 *     tags: [Certificates]
 *     responses:
 *       200:
 *         description: Lista de inscripciones obtenida con éxito
 *       400:
 *         description: Error al obtener las inscripciones
 */
router.get('/listCertificatesInscription',CertificateCtrl.listCertificatesInscriptionAll);

/**
 * @swagger
 * /certificate/listarCertificatesAcu:
 *   get:
 *     summary: Listar certificados para acudientes
 *     tags: [Certificates]
 *     responses:
 *       200:
 *         description: Lista de certificados obtenida con éxito para los acudientes
 *       400:
 *         description: Error al obtener los certificados
 */
router.get('/listarCertificatesAcu',CertificateCtrl.listarCertificatesAcu);

/**
 * @swagger
 * /certificate/listCertificatesInscription/{id}:
 *   get:
 *     summary: Consultar una inscripción de certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la inscripción del certificado
 *     responses:
 *       200:
 *         description: Inscripción obtenida con éxito
 *       400:
 *         description: Error al obtener la inscripción
 */
router.get('/listCertificatesInscription/:id',CertificateCtrl.listCertificatesInscription);

/**
 * @swagger
 * /certificate/listarCertificate/{concept}:
 *   get:
 *     summary: Consultar un certificado por concepto
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: concept
 *         schema:
 *           type: string
 *         required: true
 *         description: Concepto del certificado
 *     responses:
 *       200:
 *         description: Certificado obtenido con éxito
 *       400:
 *         description: Error al obtener el certificado
 */
router.get('/listarCertificate/:concept',CertificateCtrl.consultarCertificate);

/**
 * @swagger
 * /certificate/listarCertificateId/{id}:
 *   get:
 *     summary: Consultar un certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     responses:
 *       200:
 *         description: Certificado obtenido con éxito
 *       400:
 *         description: Error al obtener el certificado
 */
router.get('/listarCertificateId/:id',CertificateCtrl.consultarId);

/**
 * @swagger
 * /certificate/certificateInscriptionId/{id}:
 *   get:
 *     summary: Consultar una inscripción de certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la inscripción del certificado
 *     responses:
 *       200:
 *         description: Inscripción de certificado obtenida con éxito
 *       400:
 *         description: Error al obtener la inscripción de certificado
 */
router.get('/certificateInscriptionId/:id',CertificateCtrl.certificateInscriptionId);

/**
 * @swagger
 * /certificate/crearCertificate:
 *   post:
 *     summary: Crear un nuevo certificado
 *     tags: [Certificates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               concept:
 *                 type: string
 *                 description: Concepto del certificado
 *                 example: "Certificado de estudios"
 *               time:
 *                 type: string
 *                 description: Tiempo de emisión
 *                 example: "2024-08-21"
 *               channel:
 *                 type: string
 *                 description: Canal de emisión
 *                 example: "Online"
 *               applicant:
 *                 type: string
 *                 description: Solicitante del certificado
 *                 example: "Juan Pérez"
 *               price:
 *                 type: string
 *                 description: Precio del certificado
 *                 example: "100"
 *     responses:
 *       200:
 *         description: Certificado creado con éxito
 *       400:
 *         description: Error al crear el certificado
 */
router.post('/crearCertificate',[
    check('concept').notEmpty().withMessage("Ingresa el campo concept"),
    check('time').notEmpty().withMessage("Ingresa el campo time"),
    check('channel').notEmpty().withMessage("Ingresa el campo channel"),
    check('applicant').notEmpty().withMessage("Ingresa el campo applicant"),
    check('price').notEmpty().withMessage("Ingresa el campo price")
],CertificateCtrl.crearCertificate);

/**
 * @swagger
 * /certificate/actualizarCertificate/{id}:
 *   put:
 *     summary: Actualizar un certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               concept:
 *                 type: string
 *                 description: Concepto del certificado
 *                 example: "Certificado de estudios"
 *               time:
 *                 type: string
 *                 description: Tiempo de emisión
 *                 example: "2024-08-21"
 *               channel:
 *                 type: string
 *                 description: Canal de emisión
 *                 example: "Online"
 *               applicant:
 *                 type: string
 *                 description: Solicitante del certificado
 *                 example: "Juan Pérez"
 *               price:
 *                 type: string
 *                 description: Precio del certificado
 *                 example: "100"
 *     responses:
 *       200:
 *         description: Certificado actualizado con éxito
 *       400:
 *         description: Error al actualizar el certificado
 */
router.put('/actualizarCertificate/:id',
    [
        check('concept').notEmpty().withMessage("Ingresa el campo concept"),
        check('time').notEmpty().withMessage("Ingresa el campo time"),
        check('channel').notEmpty().withMessage("Ingresa el campo channel"),
        check('applicant').notEmpty().withMessage("Ingresa el campo applicant"),
        check('price').notEmpty().withMessage("Ingresa el campo price")
    ]
    ,CertificateCtrl.actualizarCertificate);

/**
 * @swagger
 * /certificate/actualizarCertificateInscription/{id}:
 *   put:
 *     summary: Actualizar la inscripción de un certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la inscripción del certificado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               documentUrl:
 *                 type: string
 *                 description: URL del documento
 *                 example: "http://example.com/document.pdf"
 *               status:
 *                 type: string
 *                 description: Estado de la inscripción
 *                 example: "Pendiente"
 *               paid:
 *                 type: string
 *                 description: Estado del pago
 *                 example: "No pagado"
 *     responses:
 *       200:
 *         description: Inscripción de certificado actualizada con éxito
 *       400:
 *         description: Error al actualizar la inscripción de certificado
 */
router.put('/actualizarCertificateInscription/:id',
    [
        check('documentUrl').notEmpty().withMessage("Ingrese el campo documentUrl"),
        check('status').notEmpty().withMessage("Ingrese el campo status"),
        check('paid').notEmpty().withMessage("Ingrese el campo paid")
    ]
    ,CertificateCtrl.actualizarCertificateInscription);

/**
 * @swagger
 * /certificate/actualizarCertificateInscriptionPaid/{id}:
 *   put:
 *     summary: Actualizar el estado de pago de una inscripción de certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la inscripción del certificado a actualizar el pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paid:
 *                 type: string
 *                 description: Estado del pago
 *                 example: "Pagado"
 *     responses:
 *       200:
 *         description: Estado de pago actualizado con éxito
 *       400:
 *         description: Error al actualizar el estado de pago
 */
router.put('/actualizarCertificateInscriptionPaid/:id',
    [
        check('paid').notEmpty().withMessage("Ingrese el campo paid")
    ],CertificateCtrl.actualizarCertificateInscriptionPaid);

/**
 * @swagger
 * /certificate/deshabilitar/{id}:
 *   put:
 *     summary: Deshabilitar un certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado a deshabilitar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Estado de habilitación
 *                 example: false
 *     responses:
 *       200:
 *         description: Certificado deshabilitado con éxito
 *       400:
 *         description: Error al deshabilitar el certificado
 */
router.put('/deshabilitar/:id',[
    check('isActive').notEmpty().withMessage("Ingrese el campo isActive")
],CertificateCtrl.deshabilitar);

/**
 * @swagger
 * /certificate/inscriptionAllSearch/{dato}/{id}:
 *   get:
 *     summary: Buscar inscripciones de certificados por dato y ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: dato
 *         schema:
 *           type: string
 *         required: true
 *         description: Dato a buscar
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     responses:
 *       200:
 *         description: Inscripciones obtenidas con éxito
 *       400:
 *         description: Error al buscar las inscripciones
 */
router.get('/inscriptionAllSearch/:dato/:id', CertificateCtrl.listarInscriptionAllSearch);

/**
 * @swagger
 * /certificate/pago:
 *   post:
 *     summary: Crear un nuevo pago de certificado
 *     tags: [Certificates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: string
 *                 description: Monto del pago
 *                 example: "200"
 *               canalEntrega:
 *                 type: string
 *                 description: Canal de entrega
 *                 example: "Presencial"
 *               detalle:
 *                 type: string
 *                 description: Detalle del pago
 *                 example: "Pago completo"
 *               idCerticate:
 *                 type: string
 *                 description: ID del certificado
 *                 example: "1"
 *               idGrade:
 *                 type: string
 *                 description: ID del grado
 *                 example: "3"
 *               metodoPago:
 *                 type: string
 *                 description: Método de pago
 *                 example: "Tarjeta"
 *               idEstudiante:
 *                 type: string
 *                 description: ID del estudiante
 *                 example: "12345"
 *               paymentCode:
 *                 type: string
 *                 description: Código de pago
 *                 example: "PAY123456"
 *               paid:
 *                 type: boolean
 *                 description: Estado del pago
 *                 example: true
 *     responses:
 *       200:
 *         description: Pago creado con éxito
 *       400:
 *         description: Error al crear el pago
 */
router.post('/pago',[
    check('monto').notEmpty().withMessage('Ingrese el campo monto'),
    check('canalEntrega').notEmpty().withMessage('Ingrese el campo canalEntrega'),
    check('detalle').notEmpty().withMessage('Ingrese el campo detalle'),
    check('idCerticate').notEmpty().withMessage('Ingrese el idCerticate'),
    check('idGrade').notEmpty().withMessage('Ingrese el idGrade'),
    check('metodoPago').notEmpty().withMessage('Ingrese el metodoPago'),
    check('idEstudiante').notEmpty().withMessage('Ingrese el campo idEstudiante'),
    check('paymentCode').notEmpty().withMessage('Ingrese el campo paymentCode'),
    check('paid').notEmpty().withMessage('Ingrese el campo paid')
],CertificateCtrl.pago);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Cambiar el estado de un certificado por ID
 *     tags: [Certificates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Nuevo estado del certificado
 *                 example: "Aprobado"
 *     responses:
 *       200:
 *         description: Estado del certificado actualizado con éxito
 *       400:
 *         description: Error al cambiar el estado del certificado
 */
router.put('/:id',[
    check('status').notEmpty().withMessage('Ingrese el campo status')
], CertificateCtrl.statusChange);



module.exports= router