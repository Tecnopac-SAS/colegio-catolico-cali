const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const tuitionTypeModel = require('../models/tuitionType.model')
const tuitionModel = require('../models/tuition.model')
const tuitionTypeCtrl = {};

tuitionTypeCtrl.consultarTuitionType = async(req,res)=>{
    try {
        const result = await tuitionTypeModel.findAll();
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

tuitionTypeCtrl.consultarTuition = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await tuitionTypeModel.findAll({ where: { description:{[Op.like]:`${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

tuitionTypeCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await tuitionTypeModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

tuitionTypeCtrl.crearTuitionType = async(req,res)=>{
    const {description,price,startDate,finalDate,surcharge,grade}= req.body 

     if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await tuitionTypeModel.create({description,price,startDate,finalDate,surcharge,grade})
        let idTuition=data.id
        await tuitionModel.create({idTuition})
        res.json({
            mensaje: 'Matricula creada',
        })
    }

   
}

tuitionTypeCtrl.actualizarTuition = async (req, res) => {
    try {
        const { id } = req.params;
        let {grade,startDate,finalDate,price} = req.body;
        if (id === undefined || price === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await tuitionTypeModel.update({grade,startDate,finalDate,price},{
            where: {
                id: id
            }
        })
        const user = await tuitionTypeModel.findOne({ where: { id: id } });
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

tuitionTypeCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await tuitionTypeModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await tuitionTypeModel.findOne({ where: { id: id } });
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

module.exports= tuitionTypeCtrl