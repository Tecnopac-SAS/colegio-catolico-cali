const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const userModel = require('../models/user.model')
const roleModel = require('../models/role.model');
const nodemailer = require("nodemailer");
const console = require('console');
const userCtrl = {};

userCtrl.consultarUsuarios = async(req,res)=>{
    try {
        const result = await userModel.findAll({ include: { association: 'userAsRole' } });
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
        const result = await userModel.findOne({ where: { email: email }, include: { association: 'userAsRole' } });
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
                idRole: result.userAsRole.role,
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


userCtrl.cadenaAleatoria = async (req, res) => {
   
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    longitud=5;
    for (let i = 0; i < longitud; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    res.json({
        result:aleatoria
    })

};

userCtrl.recuperarContrasena2 = async (req, res) => {
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

userCtrl.recuperarPass = async (req,res)=>{
    const {email} = req.params;
    const result = await userModel.findOne({ where: { email: email} });
    console.log("holaaa " +result)
    if(!result){
        return res.json({
            mensaje: 'El correo no se encuentra registrado en la bd'
        })
    }
    else {
          // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: config.email.email, // generated ethereal user
          pass: config.email.pass, // generated ethereal password
        },
      });
      // send mail with defined transport object
      const token = jwt.sign({_id:result.id},config.secret.word)
      let info   = await transporter.sendMail({
        from: '"TecnoPac 👻" <cgamertechnology@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "hola", // plain text body
        html: `<b>A continuación encontraras el codigo que debes copiar para restablecer tu contraseña</b> </br> <h2>Código:</h2>${token}`, // html body
        
      });
      
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return res.json({
            mensaje: 'Se ha enviado a su correo  un link para restablecer la constraseña '+email,
            pass: result.password
        })
    }
}

userCtrl.nuevaContraseña = async (req,res)=>{
    const id = req.params.id 
    await userModel.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await userModel.findById({_id:id})
    res.json({
        mensaje: 'contraseña actualizada',
        respuesta
    })
}

userCtrl.enviarCorreo = async (req,res)=>{
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: config.email.email, // generated ethereal user
          pass: config.email.pass, // generated ethereal password
        },
      });
      // send mail with defined transport object
      let info   = await transporter.sendMail({
        from: '"TecnoPac 👻" <cgamertechnology@gmail.com>', // sender address
        to: "alvarozi@hotmail.es", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

module.exports= userCtrl