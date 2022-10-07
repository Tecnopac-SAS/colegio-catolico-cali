const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const extracurricularModel = require('../models/extracurricular.model')
const extracurricularCtrl = {};

extracurricularCtrl.consultarExtracurriculares = async(req,res)=>{
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

extracurricularCtrl.consultarExtracurricular = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await extracurricularModel.findAll({ where: { description:{[Op.like]:`${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

extracurricularCtrl.crearExtracurricular = async(req,res)=>{
    const {imagen,activity,startDate,finalDate,price,information,schedule,teacher}= req.body 
    if(activity==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await extracurricularModel.create({imagen,activity,startDate,finalDate,price,information,schedule,teacher})
        res.json({
            mensaje: 'Extracurricular  creado',
        })
    }
}

module.exports= extracurricularCtrl