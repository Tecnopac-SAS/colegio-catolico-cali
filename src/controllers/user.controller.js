const getConnection = require('../db/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
//const userModel = require('../../models/User.model')
const bdSq = require('../db/databaseSq')
const userModel = require('../models/user.model')
const roleModel = require('../models/role.model')
const userCtrl = {};

userCtrl.consultarUsuarios = async(req,res)=>{
    try {
        const result = await userModel.findAll({ include: { association: 'userAs' } });
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

userCtrl.getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await userModel.findOne({ where: { email: email } });
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
        const result = await userModel.findOne({ where: { email: email }, include: { association: 'userAs' } });
        if (email == "" || password == "" ) {
            return res.json({
                mensaje: 'Los campos no pueden estar vacios',
            })
            
        }
     
        else if(result === null){
            return res.json({
                mensaje: 'correo invalido',
            })
        }

        const match = await bcrypt.compare(password,result.password)
        if(match){
            const token = jwt.sign({id:result.id},config.secret.word)
            res.json({
                mensaje: 'Bienvenido',
                id: result.id,
                nombres: result.name,
                idRole: result.userAs.role,
                token,
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
    const {name,email,password,isActive,idRole}= req.body 
    const result = await userModel.findOne({ where: { email: email} });
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
        await userModel.create({name,email,password,isActive,idRole})
        res.json({
            mensaje: 'Bienvenido',
            id: email,
            token,
            password:password
        })
    }
}

userCtrl.actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        let {name,email,password,isActive,idRole } = req.body;
        if (id === undefined || name === undefined || email === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        password = await bcrypt.hash(password,10)
        console.log(password)
        await userModel.update({name,email,password,isActive,idRole},{
            where: {
                id: id
            }
        })
        const user = await userModel.findOne({ where: { id: id } });
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

userCtrl.deshabilitarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await userModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await userModel.findOne({ where: { id: id } });
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


module.exports= userCtrl