const {Router} = require('express');
const router = Router();
const CertificateCtrl = require('../controllers/certificates.controller');
const {check} = require("express-validator");

router.get('/listarCertificates',CertificateCtrl.consultarCertificates);
router.get('/listCertificatesInscription',CertificateCtrl.listCertificatesInscriptionAll);
router.get('/listarCertificatesAcu',CertificateCtrl.listarCertificatesAcu);
router.get('/listCertificatesInscription/:id',CertificateCtrl.listCertificatesInscription);
router.get('/listarCertificate/:concept',CertificateCtrl.consultarCertificate);
router.get('/listarCertificateId/:id',CertificateCtrl.consultarId);
router.get('/certificateInscriptionId/:id',CertificateCtrl.certificateInscriptionId);
router.post('/crearCertificate',[
    check('concept').notEmpty().withMessage("Ingresa el campo concept"),
    check('time').notEmpty().withMessage("Ingresa el campo time"),
    check('channel').notEmpty().withMessage("Ingresa el campo channel"),
    check('applicant').notEmpty().withMessage("Ingresa el campo applicant"),
    check('price').notEmpty().withMessage("Ingresa el campo price")
],CertificateCtrl.crearCertificate);
router.put('/actualizarCertificate/:id',
    [
        check('concept').notEmpty().withMessage("Ingresa el campo concept"),
        check('time').notEmpty().withMessage("Ingresa el campo time"),
        check('channel').notEmpty().withMessage("Ingresa el campo channel"),
        check('applicant').notEmpty().withMessage("Ingresa el campo applicant"),
        check('price').notEmpty().withMessage("Ingresa el campo price")
    ]
    ,CertificateCtrl.actualizarCertificate)
router.put('/actualizarCertificateInscription/:id',
    [
        check('documentUrl').notEmpty().withMessage("Ingrese el campo documentUrl"),
        check('status').notEmpty().withMessage("Ingrese el campo status"),
        check('paid').notEmpty().withMessage("Ingrese el campo paid")
    ]
    ,CertificateCtrl.actualizarCertificateInscription)
router.put('/actualizarCertificateInscriptionPaid/:id',
    [
        check('paid').notEmpty().withMessage("Ingrese el campo paid")
    ],CertificateCtrl.actualizarCertificateInscriptionPaid)
router.put('/deshabilitar/:id',[
    check('isActive').notEmpty().withMessage("Ingrese el campo isActive")
],CertificateCtrl.deshabilitar)
router.get('/inscriptionAllSearch/:dato/:id', CertificateCtrl.listarInscriptionAllSearch)
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
router.put('/:id',[
    check('status').notEmpty().withMessage('Ingrese el campo status')
], CertificateCtrl.statusChange);



module.exports= router