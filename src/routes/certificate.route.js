const {Router} = require('express');
const router = Router();
const CertificateCtrl = require('../controllers/certificates.controller');

router.get('/listarCertificates',CertificateCtrl.consultarCertificates);
router.get('/listarCertificate/:concept',CertificateCtrl.consultarCertificate);
router.get('/listarCertificateId/:id',CertificateCtrl.consultarId);
router.post('/crearCertificate',CertificateCtrl.crearCertificate);
router.put('/actualizarCertificate/:id',CertificateCtrl.actualizarCertificate)
router.put('/deshabilitar/:id' ,CertificateCtrl.deshabilitar)
router.post('/pago',CertificateCtrl.pago);




module.exports= router