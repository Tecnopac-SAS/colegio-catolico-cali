const {sequelize, Op, where} = require('sequelize');
const { QueryTypes } = require('sequelize');

const config = require('../../config')
const pagosPresencialesModel = require('../models/pagosPresenciales.model')
const pagosPresencialesCtrl = {};
const moment = require('moment');

pagosPresencialesCtrl.consultarPagosPresenciales = async(req,res)=>{
    try {
        const result = await pagosPresencialesModel.findAll();
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

pagosPresencialesCtrl.crearPagoPresencial = async(req,res)=>{
    const {paymentCode,servicio,observacion,estado,monto}= req.body 
    const fecha = new Date(moment());
     if(paymentCode == null || servicio == null || fecha == null ){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const data = await pagosPresencialesModel.create({paymentCode,servicio,fecha,observacion,estado,monto})
        res.json({
            mensaje: 'Pago creado',
        })
    }

}

pagosPresencialesCtrl.updatePagoPresencial = async(req,res)=>{
    const { id } = req.params
    const {paymentCode,servicio,observacion,estado}= req.body 
    const fecha = new Date(moment());
     if(paymentCode == null || servicio == null || fecha == null || estado == null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const data = await pagosPresencialesModel.update({paymentCode,servicio,fecha,observacion,estado},{
            where: {
                id: id
            }
        })
        res.json({
            mensaje: 'Pago actualizado',
        })
    }

}
pagosPresencialesCtrl.updateStatusPagoPresencial = async(req,res)=>{
    const { id } = req.params
    const { estado }= req.body 
     if( estado == null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const data = await pagosPresencialesModel.update({estado: estado},{
            where: {
                id: id
            }
        })
        res.json({
            mensaje: 'Pago actualizado',
        })
    }

}

module.exports= pagosPresencialesCtrl