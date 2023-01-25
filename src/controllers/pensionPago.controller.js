const config = require('../../config')
const pensionPagoModel = require('../models/pensionMeses.model')
const pensionPagoCtrl = {};

pensionPagoCtrl.consultarPensiones = async(req,res)=>{
    const {idAcudiente} = req.body
    try {
        const result = await pensionPagoModel.findAll({where:{idAcudiente}});
        res.json({
            status: 200,
            mensaje: 'ok',
            result:result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}
module.exports= pensionPagoCtrl