const {Router} = require('express');
const router = Router();
const avalpay = require('../controllers/avalpay.controller');

router.post('/payment',avalpay.payment);
router.get('/paymentStatus/:pmtId',avalpay.paymentStatus);

module.exports= router