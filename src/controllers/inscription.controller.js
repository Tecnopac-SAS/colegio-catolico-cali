const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const inscriptionModel = require('../models/inscription.model')
const inscriptionCtrl = {};

inscriptionCtrl.consultarInscripciones = async(req,res)=>{
    try {
        const result = await inscriptionModel.findAll();
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

inscriptionCtrl.consultarInscripcion = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await inscriptionModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

inscriptionCtrl.crearInscripcion = async(req,res)=>{
    const {inscripcion}= req.body 
    const result = await inscriptionModel.findOne({ where: { inscripcion: inscripcion} });
    if(result) {
        res.json({
            mensaje: 'la inscripción ya existe'
        })
    }
    else if(inscripcion==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await inscriptionModel.create({inscripcion})
        res.json({
            mensaje: 'Inscripcion creada',
        })
    }
}

inscriptionCtrl.actualizarInscripcion = async (req, res) => {
    try {
        const { id } = req.params;
        let {inscripcion } = req.body;
        if (id === undefined || inscripcion === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        password = await bcrypt.hash(password,10)
        console.log(password)
        await inscriptionModel.update({inscripcion},{
            where: {
                id: id
            }
        })
        const user = await inscriptionModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Inscripción no encontrada',
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




module.exports= inscriptionCtrl