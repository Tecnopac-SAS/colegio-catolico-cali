const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const cafeteriaPagos = require('../models/cafeteriaPagos.model')
const acudiente = require('../models/acudiente.model')
const cafeteriaPagosCtrl = {};

cafeteriaPagosCtrl.crearPago = async(req,res)=>{
    const {data, idAcudiente}= req.body 
    let crearPago = await cafeteriaPagos.create({
        price:data.cant,
        cantMenu:data.cantMenu,
        productMenu:data.productMenu,
        metodoPago:data.metodoPago,
        mesPago:data.mesPago,
        idAcudiente:idAcudiente,
    })
    if (crearPago) {
        if (data.metodoPago == 'bolsillo') {
            let acudienteM = await acudiente.findOne({where:{id:idAcudiente}})
            let nuevoBolsillo = acudienteM.bolsillo - data.cant
            await acudiente.update({bolsillo:nuevoBolsillo},{where:{id:idAcudiente}})
        }
        res.status(200).json({
            status:true,
            message:'Pago realizado con exito'
        })
    }else{
        res.status(400).json({
            status:false,
            message:'Error al realizar el pago'
        })
    }
}
cafeteriaPagosCtrl.getPagos = async(req,res)=>{
    const {idAcudiente}= req.body
    let getPagos = await cafeteriaPagos.findAll({
        where:{
            idAcudiente:idAcudiente
        }
    })
    if (getPagos) {
        res.status(200).json({
            status:true,
            message:'Pagos obtenidos con exito',
            data:getPagos
        })
    }else{
        res.status(400).json({
            status:false,
            message:'Error al obtener los pagos'
        })
    }
}

module.exports= cafeteriaPagosCtrl