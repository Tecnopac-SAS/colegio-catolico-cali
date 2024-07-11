const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const attendingManagementModel = require('../models/attendingManagement.model')
const acudiente = require('../models/acudiente.model')
const attendingManagementCtrl = {};

attendingManagementCtrl.consultarAttendingManagements = async(req,res)=>{
    try {
        result = await acudiente.findAll({ include: [{ association: 'acudienteAsEstudiante' }]});
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
        const { nombres } = req.params;
        const result = await acudiente.findAll({ include: [{ association: 'acudienteAsEstudiante' }],
        where: { nombres:{[Op.like]:`${nombres}%`}}});
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
        const result = await acudiente.findOne({ include: [{ association: 'acudienteAsEstudiante' }], where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
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
        await acudiente.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await acudiente.findOne({ where: { id: id } });
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