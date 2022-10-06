const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const gradesModel = require('../models/grade.model')
const gradesCtrl = {};

gradesCtrl.consultarGrades = async(req,res)=>{
    try {
        const result = await gradesModel.findAll();
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

gradesCtrl.crearGrades = async(req,res)=>{
    const {grades}= req.body 
    const result = await gradesModel.findOne({ where: { grades: grades} });
    if(result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    }
    else if(grades==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await gradesModel.create({grades})
        res.json({
            mensaje: 'Rol creado',
            id: email,
            token,
            password:password
        })
    }
}

module.exports= gradesCtrl