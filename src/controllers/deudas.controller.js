const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const deudasModel = require('../models/deudas.model')
const moment = require('moment');
const deudasCtrl = {};




deudasCtrl.crearDeuda = async(req,res)=>{
    const {deudaCode,concepto,fechaInicio,fechaFinal,monto,cobro,estado,cobroValue} = req.body;
    try {
        if (deudaCode === null || concepto === null || fechaInicio === null || fechaFinal === null || monto === null || cobro === null || cobroValue === null || estado === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        data = deudasModel.create({deudaCode,concepto,fechaInicio,fechaFinal,monto,estado,cobro,cobroValue})
        if(data){
            res.json({
                status: 200,
                mensaje: 'Deuda creada con exito',
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

deudasCtrl.consultarDeudas = async(req,res)=>{
    try {
        const result = await deudasModel.findAll({ include: { association: 'deudaAsEstudiante'}});
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

deudasCtrl.editarDeuda = async(req,res)=>{
    const { id } = req.params;
    const {deudaCode,concepto,fechaInicio,fechaFinal,monto,cobro,estado,cobroValue} = req.body;
    try {
        if (deudaCode === null || concepto === null || fechaInicio === null || fechaFinal === null || monto === null || cobro === null || cobroValue === null || estado === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        data = deudasModel.update({
            deudaCode: deudaCode,
            concepto: concepto,
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            monto: monto,
            estado: estado,
            cobro: cobro,
            cobroValue: cobroValue},
            {
                where: {
                    id: id
                }
            }
        )
        if(data){
            res.json({
                status: 200,
                mensaje: 'Deuda editada con exito',
                result: {
                    deudaCode: deudaCode
                },
            });
        }else{
            res.json({
                status: 400,
                mensaje: 'Error al editar',
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

deudasCtrl.consultarDeuda = async(req,res)=>{
    try {
        const { id } = req.params
        deuda = await deudasModel.findOne({
            where: {
                id: id
            }
        });
        res.json({
            status: 200,
            mensaje: 'ok',
            result: deuda
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

module.exports= deudasCtrl