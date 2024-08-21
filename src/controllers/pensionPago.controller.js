const {sequelize, Op, where} = require('sequelize');
const pensionPagoModel = require('../models/pensionMeses.model')
const pensionPagoCtrl = {};
const moment = require('moment');
const {validationResult} = require("express-validator");

pensionPagoCtrl.consultarPensiones = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {pensiones} = req.body
    const { tipo } = req.params;
    var result

    try {

        const pensionesArray = Object.keys(pensiones);

        for (let key = 0; key < pensionesArray.length; key++) {
            var monto = 0;

            const pension = await pensionPagoModel.findOne({where:{id: pensiones[key].id}});

            if (pension.valor !== pensiones[key].valor) {
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