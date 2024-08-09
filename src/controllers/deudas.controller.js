const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const deudasModel = require('../models/deudas.model')
const moment = require('moment');
const {validationResult} = require("express-validator");
const deudasCtrl = {};




deudasCtrl.crearDeuda = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {deudaCode,concepto,fechaInicio,fechaFinal,monto,cobro,estado,cobroValue} = req.body;

    try {
        let data = deudasModel.create({deudaCode,concepto,fechaInicio,fechaFinal,monto,estado,cobro,cobroValue})
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { id } = req.params;
    const {deudaCode,concepto,fechaInicio,fechaFinal,monto,cobro,estado,cobroValue} = req.body;

    try {

        let data = deudasModel.update({
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