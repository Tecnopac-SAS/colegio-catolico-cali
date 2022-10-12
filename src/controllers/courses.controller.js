const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const courseModel = require('../models/courses.model')
const courseCtrl = {};

courseCtrl.consultarCourses = async(req,res)=>{
    try {
        const result = await courseModel.findAll();
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

courseCtrl.consultarCourse = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await courseModel.findAll({ where: { description:{[Op.like]:`${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

courseCtrl.crearCourse = async(req,res)=>{
    const {asignature,starDate,finalDate,price,teacher,typeCourse}= req.body 

     if(asignature==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await courseModel.create({asignature,starDate,finalDate,price,teacher,typeCourse})
        res.json({
            mensaje: 'Curso creado',
        })
    }

   
}

courseCtrl.actualizarCourse = async (req, res) => {
    try {
        const { id } = req.params;
        let {asignature} = req.body;
        if (id === undefined || asignature === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await courseModel.update({asignature,starDate,finalDate,price,teacher,typeCourse},{
            where: {
                id: id
            }
        })
        const user = await courseModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Matricula no encontrada',
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

module.exports= courseCtrl