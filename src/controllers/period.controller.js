const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const periodModel = require('../models/period.model')
const periodCtrl = {};

periodCtrl.consultarPeriodos = async(req,res)=>{
    try {
        const result = await periodModel.findAll();
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

periodCtrl.consultarPeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await periodModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

periodCtrl.crearPerido = async(req,res)=>{
    const {periodo}= req.body 
    const result = await periodModel.findOne({ where: { periodo: periodo} });
    if(result) {
        res.json({
            mensaje: 'El periodo ya existe'
        })
    }
    else if(periodo==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await periodModel.create({periodo})
        res.json({
            mensaje: 'Periodo creado',
        })
    }
}

periodCtrl.actualizarPeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        let {periodo } = req.body;
        if (id === undefined || periodo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        password = await bcrypt.hash(password,10)
        console.log(password)
        await periodModel.update({periodo},{
            where: {
                id: id
            }
        })
        const user = await periodModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'periodo no encontrado',
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




module.exports= periodCtrl