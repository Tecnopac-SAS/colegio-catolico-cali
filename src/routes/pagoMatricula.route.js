const {Router} = require('express');
const router = Router();
const pagoMatricula = require('../controllers/pagoMatricula.controller');

router.post('/CrearPago',pagoMatricula.crearPago);
router.post('/GetPago',pagoMatricula.getPago);




module.exports= router