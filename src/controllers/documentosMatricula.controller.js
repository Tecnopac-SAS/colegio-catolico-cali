const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const documentosMatriculaModel = require('../models/documentosMatricula.model')
const documentosMatriculaCtrl = {};

documentosMatriculaCtrl.consultarDocumentosMatriculas = async(req,res)=>{
    try {
        const result = await documentosMatriculaModel.findAll();
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

documentosMatriculaCtrl.consultarDocumentosMatricula= async (req, res) => {
    try {
        const { name } = req.params;
        const result = await documentosMatriculaModel.findAll({ where: { name:{[Op.like]:`${name}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

documentosMatriculaCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await documentosMatriculaModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

documentosMatriculaCtrl.crearDocumentosMatricula= async(req,res)=>{
    const {name,apply,grade,file}= req.body 

     if(name==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await documentosMatriculaModel.create({name,apply,grade,file})
        res.json({
            mensaje: 'documento creado',
        })
    }

}

documentosMatriculaCtrl.actualizarDocumentosMatricula= async (req, res) => {
    try {
        const { id } = req.params;
        let {name,apply,grade,file} = req.body;
        if (id === undefined || name === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await documentosMatriculaModel.update({name,apply,grade,file},{
            where: {
                id: id
            }
        })
        const user = await documentosMatriculaModel.findOne({ where: { id: id } });
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

documentosMatriculaCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await documentosMatriculaModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await documentosMatriculaModel.findOne({ where: { id: id } });
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

module.exports= documentosMatriculaCtrl