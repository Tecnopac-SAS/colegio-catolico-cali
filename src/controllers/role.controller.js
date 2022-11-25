const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const roleModel = require('../models/role.model')
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

roleCtrl.crearRole = async(req,res)=>{
    const {role}= req.body 
    const result = await roleModel.findOne({ where: { role: role} });
    if(result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    }
    else if(role==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await roleModel.create({role})
        res.json({
            mensaje: 'Rol creado',
            id: email,
            token,
            password:password
        })
    }
}

roleCtrl.actualizarRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        if (id === undefined || role === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const param = {role};
        const connection = await getConnection();
        const result = await connection.query("UPDATE user SET ? WHERE id = ?", [param, id]);
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




module.exports= roleCtrl