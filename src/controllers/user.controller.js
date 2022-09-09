const getConnection = require('../db/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../../config')
const userModel = require('../models/user.model')
const userCtrl = {};

userCtrl.consultarUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM user");
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
};

userCtrl.consultarUsuariosSq = async(req,res)=>{
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
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM user WHERE id = ?", id);
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

userCtrl.consultarUsuarioSq = async (req, res) => {
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
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM user WHERE email = ?", email);
        if(!result.length){
            return res.json({
                mensaje: 'correo incorrecto '+ email
            })
        }
        const match = await bcrypt.compare(password,result[0].password)
        if(match){
            const token = jwt.sign({id:result[0].id},config.secret.word)
            res.json({
                mensaje: 'Bienvenido',
                id: result[0].id,
                nombres: result[0].name,
                rol: result[0].roleId,
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

userCtrl.loginSq = async(req,res)=>{
    try {
        const {email,password}= req.body
        const result = await userModel.findOne({ where: { email: email } });
        if(!result.email){
            return res.json({
                mensaje: 'correo incorrecto '+ email+result.email
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
    try {
        const {userName, name,email,password,isActive,idRole}= req.body 
        if(name==null || email == null || password==null){
           res.json({
               mensaje: 'Los campos deben estar diligenciados en su totalidad'
           })
       }
       const connection = await getConnection();
       const result  =  await connection.query("SELECT * FROM user WHERE userName = ?",userName);
       if(result.length>0){
        res.json({
            mensaje: 'El usuario ya se encuentra registrado: '+userName
        })

       }
       else {
           const users = {userName, name,email,password,isActive,idRole };
           const connection = await getConnection();
           users.password = await bcrypt.hash(password,10)
           const token = jwt.sign({id:users.id},config.secret.word)
           await connection.query("INSERT INTO user SET ?", users);
           res.json({
            mensaje: 'ok',
            users,
            token,
        })
       }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
}
userCtrl.crearUsuarioSq = async(req,res)=>{
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
        await userModel.create({userName, name,email,password,isActive,idRole })
        res.json({
            mensaje: 'Bienvenido',
            id: userName,
            token,
            password:password
        })
    }
}

userCtrl.actualizar = async (req, res) => {
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