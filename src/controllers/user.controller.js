const getConnection = require('../db/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
//const userModel = require('../../models/User.model')
const bdSq = require('../db/databaseSq')
const userModel = require('../models/user.model')
const userCtrl = {};

userCtrl.consultarUsuarios = async(req,res)=>{
    try {
        const result = await userModel.findAll();
        res.json({
            status: 200,
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

userCtrl.consultarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

userCtrl.login = async(req,res)=>{
    try {
    
        const {email,password}= req.body
        const result = await userModel.findOne({ where: { email: email } });

        if (email == "" || password == "" ) {
            return res.json({
                mensaje: 'Los campos no pueden estar vacios',
            })
            
        }
     
        else if(result === null){
            return res.json({
                mensaje: 'correo incorrecto '+ email,
            })
        }

        const match = await bcrypt.compare(password,result.password)
        if(match){
            const token = jwt.sign({id:result.id},config.secret.word)
            res.json({
                mensaje: 'Bienvenido',
                id: result.id,
                nombres: result.name,
                rol: result.roleId,
                token
            })
        }
        else {
            res.json({
                mensaje:'Contraseña incorrecta'
            })
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}


userCtrl.crearUsuario = async(req,res)=>{
    const {userName, name,email,password,isActive,idRole}= req.body 
    const result = await userModel.findOne({ where: { userName: userName} });
    if(result) {
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }
    else if(name==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const token = jwt.sign({id:userModel.id},config.secret.word)
        await userModel.create({userName, name,email,password,isActive,idRole})
        res.json({
            mensaje: 'Bienvenido',
            id: userName,
            token,
            password:password
        })
    }
}

userCtrl.actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, name,email,password,isActive,idRole } = req.body;

        if (id === undefined || name === undefined || email === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const user = { userName, name,email,password,isActive,idRole};
        const connection = await getConnection();
        const result = await connection.query("UPDATE user SET ? WHERE id = ?", [user, id]);
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

userCtrl.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM user WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


module.exports= userCtrl