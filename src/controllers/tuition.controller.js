const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const tuitionModel = require('../models/tuition.model')
const tuitionCtrl = {};

tuitionCtrl.consultarTuitions = async(req,res)=>{
    try {
        const result = await tuitionModel.findAll({ include: { association: 'tuitionAsRegistrationType' } });
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

tuitionCtrl.crearTuition = async(req,res)=>{
    const {tuition}= req.body 
    const result = await tuitionModel.findOne({ where: { tuition: tuition} });
    if(result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    }
    else if(tuition==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await tuitionModel.create({tuition})
        res.json({
            mensaje: 'Rol creado',
            id: email,
            token,
            password:password
        })
    }
}

module.exports= tuitionCtrl