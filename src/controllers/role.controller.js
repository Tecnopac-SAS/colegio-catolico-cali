const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const roleModel = require('../models/role.model')
const {validationResult} = require("express-validator");
const Role = require("../models/role.model");
const roleCtrl = {};

roleCtrl.consultarRoles = async(req,res)=>{
    try {
        const result = await roleModel.findAll();
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

roleCtrl.crearRole = async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {role}= req.body
    const result = await roleModel.findOne({ where: { role: role} });

    if(result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    } else {
        try{
            await roleModel.create({role})
            res.json({
                mensaje: 'Rol ha sido creado',
            })
        }catch (e){
            console.log(e);
        }
    }
}

roleCtrl.deleteRole =  async (req, res) => {
    const { id } = req.params;
    try{
        await Role.destroy({
            where: {
                id,
            },
            force: true,
        });
        res.json({
            mensaje: 'Se ha elimnado el Rol.',
        })
    }catch (e){
        res.status(500).send(error.message);
    }
}

roleCtrl.actualizarRole = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { id } = req.params;
    const {role, isActive} = req.body;

    try {
        const rl = await Role.findOne({ where: { id } });
        console.log(rl.id);
        if(rl){
            await Role.update({
                isActive: isActive,
                role: role
            }, {where: {
                id: rl.id
            }})
            res.json({
                mensaje: 'ok',
                rl
            })
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
};




module.exports= roleCtrl