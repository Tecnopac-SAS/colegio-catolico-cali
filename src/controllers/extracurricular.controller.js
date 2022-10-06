const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const extracurricularModel = require('../models/extracurricular.model')
const extracurricularCtrl = {};

extracurricularCtrl.consultarextracurricular = async(req,res)=>{
    try {
        const result = await extracurricularModel.findAll();
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

extracurricularCtrl.crearextracurricular = async(req,res)=>{
    const {imagen,activity,startDate,finalDate,teacher}= req.body 
    if(activity==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await extracurricularModel.create({imagen,activity,startDate,finalDate,teacher})
        res.json({
            mensaje: 'Extracurricular creado creado',
        })
    }
}

module.exports= extracurricularCtrl