const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const coursesInscriptionModel = require('../models/coursesInscription.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const matriculasPagosModel = require('../models/matriculasPagos.model')
const soportesPagosModel = require('../models/soportesPago.model')
const pensionMesesModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const moment = require('moment');
const soportePagosCtrl = {};




soportePagosCtrl.crearSoportePago = async(req,res)=>{
    const { paymentCode,idAcudiente,monto,viaPago,tipoPago } = req.body;
    try {
        const fecha = new Date(moment());
        const data = soportesPagosModel.create({paymentCode,monto,idAcudiente,viaPago,tipoPago,fecha});
        if(data){
            res.json({
                status: 200,
                mensaje: 'Soporte creado con exito',
                result: {
                    paymentCode: paymentCode
                },
            });
        }else{
            res.json({
                status: 400,
                mensaje: 'Error al crear soporte de pago',
                result: data
            });
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

soportePagosCtrl.listarMisSoportesPagos = async(req,res)=>{
    const { idAcudiente } = req.params;
    try {
        const result = await soportesPagosModel.findAll({ include: [{ association: 'soportesPagosAsEstudiante' }], where: {idAcudiente: idAcudiente},        order: [
            ['fecha', 'DESC'],
        ],});
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}


module.exports= soportePagosCtrl