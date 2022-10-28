const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const certificatesModel = require('../models/certificates.model')
const certificatesCtrl = {};

certificatesCtrl.consultarCertificates = async(req,res)=>{
    try {
        const result = await certificatesModel.findAll();
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

certificatesCtrl.consultarCertificate = async (req, res) => {
    try {
        const { concept } = req.params;
        const result = await certificatesModel.findAll({ where: { concept:{[Op.like]:`${concept}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

certificatesCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await certificatesModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

certificatesCtrl.crearCertificate = async(req,res)=>{
    const {concept,time,channel,applicant,price}= req.body 

     if(concept==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await certificatesModel.create({concept,time,channel,applicant,price})
        res.json({
            mensaje: 'Certificado creado',
        })
    }

}

certificatesCtrl.actualizarCertificate = async (req, res) => {
    try {
        const { id } = req.params;
        let {concept,time,channel,applicant,price} = req.body;
        if (id === undefined || concept === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificatesModel.update({concept,time,channel,applicant,price},{
            where: {
                id: id
            }
        })
        const user = await certificatesModel.findOne({ where: { id: id } });
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

certificatesCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificatesModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await certificatesModel.findOne({ where: { id: id } });
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

module.exports= certificatesCtrl