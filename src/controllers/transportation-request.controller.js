const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq');
const transportationRequestModel = require('../models/transportation-request.model');
const transportationModel = require('../models/transportation.model');
const transportationRequestCtrl = {};

transportationRequestCtrl.consultarTransportationsRequests = async(req,res)=>{
    try {
        const result = await transportationRequestModel.findAll({include: [{ association: 'TransportationRequestAsTransportation' }]});
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
        const { id } = req.params;
        const result = await transportationRequestModel.findAll({ where: { id: id }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

transportationRequestCtrl.consultarTransportationByStudentRequest = async (req, res) => {
    try {
        const {estudianteid,acudienteid } = req.params;
        const result = await transportationRequestModel.findAll({ where: { estudianteid: estudianteid, acudienteid: acudienteid}});
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

transportationRequestCtrl.aprobarSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado, routeid} = req.body;
        if (estado === null || routeid === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await transportationRequestModel.update({estado: estado, routeid: routeid},{
            where: {
                id: id
            }
        });
        res.json({
            status: true,
            mensaje: 'Solicitud Aprobada!'
        })
    } catch (error) {
        res.status(500);
        res.json({
            status: false,
            mensaje: error.message
        })
    }
};



transportationRequestCtrl.crearTransportationRequest = async(req,res)=>{
    
    const {routeid,acudienteid,estudianteid,estado,routeType,datosResponsable,direccion_recogida,direccion_entrega}= req.body 

     if(routeType==null || acudienteid==null || estudianteid==null || estado==null || datosResponsable==null){
        res.json({
            status: false,
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const data = await transportationRequestModel.create({routeid,acudienteid,estudianteid,estado,routeType,datosResponsable,direccion_recogida,direccion_entrega})
        res.json({
            status: true,
            mensaje: 'Solicitud creada!',
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
        await transportationRequestModel.update({routeid,acudienteid,estudianteid,estado,routeType,datosResponsable,direccion_recogida,direccion_entrega},{
            where: {
                id: id
            }
        })
        const user = await transportationRequestModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Solicitud no encontrada!',
            })
        }
        else {
            res.json({
                mensaje: 'Solicitud modificada!',
                result:user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


module.exports= transportationRequestCtrl