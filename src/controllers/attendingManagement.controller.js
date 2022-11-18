const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const attendingManagementModel = require('../models/attendingManagement.model')
const attendingManagementCtrl = {};

attendingManagementCtrl.consultarAttendingManagements = async(req,res)=>{
    try {
        const result = await attendingManagementModel.findAll();
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

attendingManagementCtrl.consultarAttendingManagement = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await attendingManagementModel.findAll({ where: { name:{[Op.like]:`${name}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

attendingManagementCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await attendingManagementModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

attendingManagementCtrl.crearAttendingManagement = async(req,res)=>{
    const {description,pay}= req.body 

     if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await attendingManagementModel.create({description,pay})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

attendingManagementCtrl.actualizarAttendingManagement = async (req, res) => {
    try {
        const { id } = req.params;
        let {description,pay} = req.body;
        if (id === undefined || description === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await attendingManagementModel.update({description,pay},{
            where: {
                id: id
            }
        })
        const user = await attendingManagementModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'curso no encontrado',
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

attendingManagementCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await attendingManagementModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await attendingManagementModel.findOne({ where: { id: id } });
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

module.exports= attendingManagementCtrl