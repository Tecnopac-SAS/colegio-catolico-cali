const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const tuitionTypeModel = require('../models/tuitionType.model')
const tuitionModel = require('../models/tuition.model')
const tuitionTypeCtrl = {};

tuitionTypeCtrl.consultarTuitionType = async(req,res)=>{
    try {
        const result = await tuitionTypeModel.findAll({ include: { association: 'tuitionTypeAsGrades' } });
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
        const result = await tuitionTypeModel.findAll({include: { association: 'tuitionTypeAsGrade' }, where: { description:{[Op.like]:`${description}%`}}});
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
    const {description,price,startDate,finalDate,surcharge,idGrade}= req.body 

     if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await tuitionTypeModel.create({description,price,startDate,finalDate,surcharge,idGrade})
        let idTuition=data.id
        await tuitionModel.create({idTuition})
        console.log("Prueba " +idTuition)
        res.json({
            mensaje: 'Matricula creada',
        })
    }

   
}

tuitionTypeCtrl.actualizarTuition = async (req, res) => {
    try {
        const { id } = req.params;
        let {description,price,surcharge,isActive,idGrade} = req.body;
        if (id === undefined || description === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await tuitionTypeModel.update({description,price,surcharge,isActive,idGrade},{
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

module.exports= tuitionTypeCtrl