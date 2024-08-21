const { makeRequest, makeRequestPay, makePaymentStatus } = require('../services/avalpay.service');
const {validationResult} = require("express-validator");
const avalpay = {};

avalpay.payment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const { amount,invoiceType,portalURL,desc} = req.body;
        let token = await makeRequest();
        token = JSON.parse(token);
        let payment = await makeRequestPay(token.access_token, amount, invoiceType, portalURL, desc);
        res.json({ message: JSON.parse(payment) });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
avalpay.paymentStatus = async (req, res) => {
    try {
        const { pmtId } = req.params;
        let token = await makeRequest();
        token = JSON.parse(token);
        let paymentStatus = await makePaymentStatus(token.access_token, pmtId);
        res.json({ message: JSON.parse(paymentStatus) });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports= avalpay