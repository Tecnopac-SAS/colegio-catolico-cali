const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const pensionModel = require('../models/pension.model')
const pensionCtrl = {};

pensionCtrl.consultarPensiones = async(req,res)=>{
    try {
        //const result = await pensionModel.findAll({ include: { association: 'pensionAsGrade' } });
        const result = await pensionModel.findAll();
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

pensionCtrl.consultarPension = async (req, res) => {
    try {
        const { idGrade } = req.params;
        //const result = await pensionModel.findAll({include: { association: 'pensionAsGrade' }, where: { description:{[Op.like]:`${description}%`}}});
        const result = await pensionModel.findAll({ where: { idGrade:{[Op.like]:`${idGrade}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

pensionCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pensionModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
pensionCtrl.crearPension = async(req,res)=>{
    const {price,discount,use,idGrade}= req.body 

     if(price==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await pensionModel.create({price,discount,use,idGrade})
        res.json({
            mensaje: 'Pensión creada',
        })
    }

   
}

pensionCtrl.actualizarPension = async (req, res) => {
    try {
        const { id } = req.params;
        let {price,discount,idGrade} = req.body;
        if (id === undefined || discount === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await pensionModel.update({price,discount,idGrade},{
            where: {
                id: id
            }
        })
        const user = await pensionModel.findOne({ where: { id: id } });
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

pensionCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await pensionModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await pensionModel.findOne({ where: { id: id } });
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
module.exports= pensionCtrl