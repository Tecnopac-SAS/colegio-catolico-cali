const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const teacherModel = require('../models/teacher.model')
const teacherCtrl = {};

teacherCtrl.consultarTeachers = async(req,res)=>{
    try {
        const result = await teacherModel.findAll();
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

teacherCtrl.consultarTeacher = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await teacherModel.findAll({ where: { name:{[Op.like]:`${name}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

teacherCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await teacherModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
teacherCtrl.crearTeacher = async(req,res)=>{
    const {name,course,email,number}= req.body 

     if(name==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await teacherModel.create({name,course,email,number})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

teacherCtrl.actualizarTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        let {name,course,email,number} = req.body;
        if (id === undefined || name === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await teacherModel.update({name,course,email,number},{
            where: {
                id: id
            }
        })
        const user = await teacherModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Docente no encontrado',
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

teacherCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await teacherModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await teacherModel.findOne({ where: { id: id } });
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

module.exports= teacherCtrl