const {Router} = require('express');
const router = Router();
const avalpay = require('../controllers/avalpay.controller');
const {check} = require("express-validator");

router.post('/payment', [
    check("amount").notEmpty().withMessage("Ingresa el campo amount"),
    check("invoiceType").notEmpty().withMessage("Ingresa el campo invoiceType"),
    check("portalURL").notEmpty().withMessage("Ingresa el campo portalURL"),
    check("desc").notEmpty().withMessage("Ingresa el campo desc")
], avalpay.payment);
router.get('/paymentStatus/:pmtId', avalpay.paymentStatus);

module.exports = router