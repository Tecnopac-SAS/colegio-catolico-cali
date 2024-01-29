const {sequelize, Op, where} = require('sequelize');
const { QueryTypes } = require('sequelize');

const config = require('../../config')
const pensionPagoModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const pensionPagoCtrl = {};
const moment = require('moment');

pensionPagoCtrl.consultarPensiones = async(req,res)=>{
    const {idAcudiente} = req.body
    try {
        const result = await pensionPagoModel.findAll({
            where:{
                idAcudiente,
                createdAt: {[Op.between]:[new Date(moment().format(`YYYY-01-01 00:00:00`)),new Date(moment().format(`YYYY-12-31 23:59:59`))]}
            },
            include: {association: 'pensionesMesesAsPension'}
        });
        let tabla = []
        result.forEach(element => {
            // return res.json({prueba:{...element.toJSON()}})
            if (new Date() > new Date(moment(new Date(element.fechaPago)).add(6, 'days'))) {
                tabla.push({...element.toJSON(),valor:element.valor+Math.floor(element.valor*element.pensionesMesesAsPension.interes)/100,mora:true})
            }else{
                tabla.push({...element.toJSON(),mora:false})
            }
        });

        res.json({
            status: 200,
            mensaje: 'ok',
            result:tabla
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
            var monto = 0
            const pension = await pensionPagoModel.findOne({where:{id: pensiones[key].id}});
            console.log('pension.valor!=pensiones[key].valor', pension.valor!=pensiones[key].valor)
            if (pension.valor!=pensiones[key].valor) {
                monto = Number(pensiones[key].valor)
                result = await pensionPagoModel.update({estatus:'Pagado',valorConDescuento:pensiones[key].valor,metodoPago:tipo,mora:pensiones[key].mora},{
                    where: {
                        id: pensiones[key].id
                    }
                });
            }else{
                monto = Number(pension.valor)
                result = await pensionPagoModel.update({estatus:'Pagado',metodoPago:tipo,mora:pensiones[key].mora},{
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
            mensaje: 'Pago realizado!',
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