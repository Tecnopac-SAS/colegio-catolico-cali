const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const schoolYearModel = require('../models/schoolYear.model')
const userModel = require('../models/user.model')
const schoolYearCtrl = {};

schoolYearCtrl.consultarSchoolYears = async(req,res)=>{
    try {
        const result = await schoolYearModel.findAll();
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

schoolYearCtrl.consultarSchoolYear= async (req, res) => {
    try {
        const { code } = req.params;
        const result = await schoolYearModel.findAll({ where: { code:{[Op.like]:`${code}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

schoolYearCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await schoolYearModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

schoolYearCtrl.crearSchoolYear= async(req,res)=>{
    const {code,age}= req.body 

     if(code==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await schoolYearModel.create({code,age})
        res.json({
            mensaje: 'documento creado',
        })
    }

}



schoolYearCtrl.actualizarSchoolYear= async (req, res) => {
    try {
        const { id } = req.params;
        let {code,age} = req.body;
        if (id === undefined || code === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await schoolYearModel.update({code,age},{
            where: {
                id: id
            }
        })
        const user = await schoolYearModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'certificado no encontrado',
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

schoolYearCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await schoolYearModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await schoolYearModel.findOne({ where: { id: id } });
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

schoolYearCtrl.cambioAnioLectivo2 = async (req, res) => {
    try {
        await bdSq.query("UPDATE schoolyears AS tab,(SELECT MAX( id ) AS maximo FROM schoolyears ) AS max SET tab.isActive = false WHERE tab.id < max.maximo");
        await bdSq.query("UPDATE schoolyears AS tab,(SELECT MAX( id ) AS maximo FROM schoolyears ) AS max SET tab.isActive = true WHERE tab.id = max.maximo");
        return res.json({
            mensaje: 'actualizado',
        })
            
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


schoolYearCtrl.cambioAnioLectivo = async(req,res)=>{
    try {
        const {id,password}= req.body
        const result = await userModel.findOne({ where: { id: id }, include: { association: 'userAsRole' } });
        if (password == "" ) {
            return res.json({
                mensaje: 'Los campos no pueden estar vacios',
            })
        }
        else if(result === null){
            return res.json({
                mensaje: 'id invalido',
            })
        }
        const match = await bcrypt.compare(password,result.password)
        if(match){
            res.json({
                mensaje: 'ok',
            })
            await bdSq.query("UPDATE schoolyears AS tab,(SELECT MAX( id ) AS maximo FROM schoolyears ) AS max SET tab.isActive = false WHERE tab.id < max.maximo");
            await bdSq.query("UPDATE schoolyears AS tab,(SELECT MAX( id ) AS maximo FROM schoolyears ) AS max SET tab.isActive = true WHERE tab.id = max.maximo");
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

module.exports= schoolYearCtrl