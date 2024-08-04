const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const bcrypt = require('bcrypt')
const periodModel = require('../models/period.model')
const {validationResult} = require("express-validator");
const periodCtrl = {};

periodCtrl.consultarPeriodos = async(req,res)=>{
    try {
        const result = await periodModel.findAll();
        if(result){
            res.json({
                status: 200,
                mensaje: 'ok',
                result:result
            })
        }else{
            res.json({
                mensaje: 'No hay consultas'
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

periodCtrl.consultarPeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await periodModel.findOne({ where: { id: id } });
        if(result){
            res.json({
                mensaje: 'ok',
                result
            })
        }else{
            res.json({
                mensaje: 'No hay consultas'
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

periodCtrl.crearPerido = async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {age,password,identifier,consecutive}= req.body

    const result = await periodModel.findOne({ where: { identifier: identifier+consecutive} });

    if(result) {
        res.json({
            mensaje: 'El periodo ya existe'
        })
    }

    if(identifier == null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    } else {
        isActive=false;
        await periodModel.update({isActive},{
            where: {
                isActive: true
            }
        })
        await periodModel.create({age,password,identifier,consecutive})
        res.json({
            mensaje: 'Periodo creado',
        })
    }
}

periodCtrl.actualizarPeriodo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const { id } = req.params;
        let {age,password,identifier,consecutive } = req.body;

        password = await bcrypt.hash(password,10)
        await periodModel.update({age,password,identifier,consecutive},{
            where: {
                id: id
            }
        })

        const user = await periodModel.findOne({ where: { id: id } });

         if(user === null){
            return res.json({
                mensaje: 'periodo no encontrado',
            })
        }
        else {
            res.json({
                mensaje: 'ok',
                result:user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




module.exports= periodCtrl