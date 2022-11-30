const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const technicalModel = require('../models/technical.model')
const technicalCtrl = {};

technicalCtrl.consultarTechnicals = async(req,res)=>{
    try {
        const result = await technicalModel.findAll({include: { association: 'mediasTecnicasAsTeacher' }});
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

technicalCtrl.consultarTechnical= async (req, res) => {
    try {
        const { course } = req.params;
        const result = await technicalModel.findAll({ where: { course:{[Op.like]:`${course}%`}},include: { association: 'mediasTecnicasAsTeacher' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

technicalCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await technicalModel.findOne({ where: { id: id },include: { association: 'mediasTecnicasAsTeacher' } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

technicalCtrl.crearTechnical= async(req,res)=>{
    const {course,startDate,finalDate,price,idTeacher}= req.body 

     if(course==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await technicalModel.create({course,startDate,finalDate,price,idTeacher})
        res.json({
            mensaje: 'Certificado creado',
        })
    }

}

technicalCtrl.actualizarTechnical= async (req, res) => {
    try {
        const { id } = req.params;
        let {course,startDate,finalDate,price,idTeacher} = req.body;
        if (id === undefined || course === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await technicalModel.update({course,startDate,finalDate,price,idTeacher},{
            where: {
                id: id
            }
        })
        const user = await technicalModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'certificado no encontrado',
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

technicalCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await technicalModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await technicalModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'usuario no encontrado',
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

module.exports= technicalCtrl