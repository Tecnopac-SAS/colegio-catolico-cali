const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const cafeteriaModel = require('../models/cafeteria.model')
const cafeteriaCtrl = {};

cafeteriaCtrl.consultarCafeterias = async(req,res)=>{
    try {
        const result = await cafeteriaModel.findAll();
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

cafeteriaCtrl.consultarCafeteria = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await cafeteriaModel.findAll({ where: { description:{[Op.like]:`${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

cafeteriaCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await cafeteriaModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

cafeteriaCtrl.crearCafeteria = async(req,res)=>{
    const {description,pay}= req.body 

     if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await cafeteriaModel.create({description,pay})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

cafeteriaCtrl.actualizarCafeteria = async (req, res) => {
    try {
        const { id } = req.params;
        let {description,pay} = req.body;
        if (id === undefined || description === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await cafeteriaModel.update({description,pay},{
            where: {
                id: id
            }
        })
        const user = await cafeteriaModel.findOne({ where: { id: id } });
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

cafeteriaCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await cafeteriaModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await cafeteriaModel.findOne({ where: { id: id } });
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

module.exports= cafeteriaCtrl