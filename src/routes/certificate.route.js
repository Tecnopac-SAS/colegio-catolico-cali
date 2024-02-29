const {Router} = require('express');
const router = Router();
const CertificateCtrl = require('../controllers/certificates.controller');

router.get('/listarCertificates',CertificateCtrl.consultarCertificates);
router.get('/listCertificatesInscription',CertificateCtrl.listCertificatesInscriptionAll);
router.get('/listarCertificatesAcu',CertificateCtrl.listarCertificatesAcu);
router.get('/listCertificatesInscription/:id',CertificateCtrl.listCertificatesInscription);
router.get('/listarCertificate/:concept',CertificateCtrl.consultarCertificate);
router.get('/listarCertificateId/:id',CertificateCtrl.consultarId);
router.get('/certificateInscriptionId/:id',CertificateCtrl.certificateInscriptionId);
router.post('/crearCertificate',CertificateCtrl.crearCertificate);
router.put('/actualizarCertificate/:id',CertificateCtrl.actualizarCertificate)
router.put('/actualizarCertificateInscription/:id',CertificateCtrl.actualizarCertificateInscription)
router.put('/actualizarCertificateInscriptionPaid/:id',CertificateCtrl.actualizarCertificateInscriptionPaid)
router.put('/deshabilitar/:id' ,CertificateCtrl.deshabilitar)
router.get('/inscriptionAllSearch/:dato/:id' ,CertificateCtrl.listarInscriptionAllSearch)
router.post('/pago',CertificateCtrl.pago);
router.put('/:id', CertificateCtrl.statusChange);



module.exports= router