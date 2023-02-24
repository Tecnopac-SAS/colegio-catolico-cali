const config = require('../../config')
const pensionPagoModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
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
    const { tipo } = req.params;
    var result
    var nuevoBolsillo
    try {
       
        /* await Promise.all(Object.keys(pensiones).map (async(key) => { */

        const pensionesArray = Object.keys(pensiones);

        for (let key = 0; key < pensionesArray.length; key++) {
            console.log("--------------------")
            console.log("entro al index " + key)
            var monto = 0
            const pension = await pensionPagoModel.findOne({where:{id: pensiones[key].id}});
            console.log('pension.valor!=pensiones[key].valor', pension.valor!=pensiones[key].valor)
            if (pension.valor!=pensiones[key].valor) {
                monto = Number(pensiones[key].valor)
                console.log("monto ", monto)
                result = await pensionPagoModel.update({estatus:'Pagado',valorConDescuento:pensiones[key].valor,metodoPago:tipo},{
                    where: {
                        id: pensiones[key].id
                    }
                });
            }else{
                console.log("entro en el else")
                monto = Number(pension.valor)
                result = await pensionPagoModel.update({estatus:'Pagado',metodoPago:tipo},{
                    where: {
                        id: pensiones[key].id
                    }
                });

            }
            console.log({result})

            if (result) {
                console.log({tipo})
                if (tipo == 'bolsillo') {
                    const acudienteM = await acudiente.findOne({where:{id:pension.idAcudiente}})
                    console.log({acudienteM})
                    nuevoBolsillo = acudienteM.bolsillo - monto
                    console.log({nuevoBolsillo})
                    await acudiente.update({bolsillo:nuevoBolsillo},{where:{id:pension.idAcudiente}})
                }
            }
        }
        
        res.json({
            status: true,
            mensaje: 'pago realizado',
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