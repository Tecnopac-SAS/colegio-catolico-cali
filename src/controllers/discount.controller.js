const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const discountModel = require('../models/discount.model')
const discountCtrl = {};

discountCtrl.consultarDiscounts = async(req,res)=>{
    try {
        const result = await discountModel.findAll({where: {isActive: 1}});
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

discountCtrl.consultarDiscount = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await discountModel.findAll({ where: { name:{[Op.like]:`${name}%`, isActive: 1}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

discountCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await discountModel.findOne({ where: { id: id, isActive: 1 } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

discountCtrl.crearDiscount = async(req,res)=>{
    const {name,starDate,finalDate,percentage,useType,frequency,service,status}= req.body 

     if(name==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await discountModel.create({name,starDate,finalDate,percentage,useType,frequency,service,status})
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

discountCtrl.actualizarDiscount = async (req, res) => {
    try {
        const { id } = req.params;
        let {name,starDate,finalDate,percentage,useType,frequency,service,isActive,status} = req.body;
        if (id === undefined || name === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await discountModel.update({name,starDate,finalDate,percentage,useType,frequency,service,isActive,status},{
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'descuento no encontrado',
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

discountCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (status === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await discountModel.update({status},{
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({ where: { id: id } });
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

discountCtrl.eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await discountModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({ where: { id: id } });
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

module.exports= discountCtrl