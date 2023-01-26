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
pensionPagoCtrl.pagarPensiones = async(req,res)=>{
    const {pensiones} = req.body
    var result
    try {
        Object.keys(pensiones).forEach (async(key) => {
            const pension = await pensionPagoModel.findOne({where:{id: pensiones[key].id}});
            if (pension.valor!=pensiones[key].valor) {
                result = await pensionPagoModel.update({estatus:'Pagado',valorConDescuento:pensiones[key].valor},{
                    where: {
                        id: pensiones[key].id
                    }
                });
            }else{
                result = await pensionPagoModel.update({estatus:'Pagado'},{
                    where: {
                        id: pensiones[key].id
                    }
                });

            }
        });
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