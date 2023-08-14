const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq');
const transportationRequestModel = require('../models/transportation-request.model');
const transportationModel = require('../models/transportation.model');
const transportationRequestCtrl = {};

transportationRequestCtrl.consultarTransportationsRequest = async(req,res)=>{
    try {
        const result = await transportationRequestModel.findAll();
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

transportationRequestCtrl.consultarTransportationRequest = async (req, res) => {
    try {
        const { routeName } = req.params;
        const result = await transportationRequestModel.findAll({ where: { routeName:{[Op.like]:`${routeName}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationRequestCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await transportationRequestModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationRequestCtrl.aprobarCupo = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado, cupo , idruta} = req.body;
        if (estado === null || cupo === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await transportationRequestModel.update({estado: estado},{
            where: {
                id: id
            }
        });
        await transportationModel.update({cupo_disponible: cupo},{
            where: {
                id: idruta
            }
        });
        res.json({
            mensaje: 'ok'
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationRequestCtrl.crearTransportationRequest = async(req,res)=>{
    const {routeid,acudienteid,estudianteid,estado,direccion_recogida,direccion_entrega}= req.body 

     if(routeid==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await transportationRequestModel.create({routeid,acudienteid,estudianteid,estado,direccion_recogida,direccion_entrega})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

transportationRequestCtrl.actualizarTransportation = async (req, res) => {
    try {
        const { id } = req.params;
        let {routeName,routeNumber,responsible,routeType,price} = req.body;
        if (id === undefined || routeName === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await transportationRequestModel.update({routeName,routeNumber,responsible,routeType,price},{
            where: {
                id: id
            }
        })
        const user = await transportationRequestModel.findOne({ where: { id: id } });
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


module.exports= transportationRequestCtrl