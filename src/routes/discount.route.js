const {Router} = require('express');
const router = Router();
const DiscountCtrl = require('../controllers/discount.controller');

router.get('/listarDiscounts',DiscountCtrl.consultarDiscounts);
router.get('/listarDiscount/:name',DiscountCtrl.consultarDiscount);
router.get('/listarDiscountId/:id',DiscountCtrl.consultarId);
router.post('/crearDiscount',DiscountCtrl.crearDiscount);
router.put('/actualizarDiscount/:id',DiscountCtrl.actualizarDiscount)
router.put('/deshabilitar/:id' ,DiscountCtrl.deshabilitar)
router.put('/eliminar/:id' ,DiscountCtrl.eliminar)





module.exports= router