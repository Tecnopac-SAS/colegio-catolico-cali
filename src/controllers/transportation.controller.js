const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const transportationModel = require('../models/transportation.model')
const transportationCtrl = {};

transportationCtrl.consultarTransportations = async(req,res)=>{
    try {
        const result = await transportationModel.findAll();
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

transportationCtrl.consultarTransportation = async (req, res) => {
    try {
        const { routeName } = req.params;
        const result = await transportationModel.findAll({ where: { routeName:{[Op.like]:`${routeName}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await transportationModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationCtrl.crearTransportation = async(req,res)=>{
    const {routeName,routeNumber,responsible,price}= req.body 

     if(routeName==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await transportationModel.create({routeName,routeNumber,responsible,price})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

transportationCtrl.actualizarTransportation = async (req, res) => {
    try {
        const { id } = req.params;
        let {routeName,routeNumber,responsible,price} = req.body;
        if (id === undefined || routeName === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await transportationModel.update({routeName,routeNumber,responsible,price},{
            where: {
                id: id
            }
        })
        const user = await transportationModel.findOne({ where: { id: id } });
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

module.exports= transportationCtrl