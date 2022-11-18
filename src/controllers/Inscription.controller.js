const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const InscriptionModel = require('../models/inscription.model')
const InscriptionCtrl = {};

InscriptionCtrl.consultarInscriptions = async(req,res)=>{
    try {
        const result = await InscriptionModel.findAll({ include: [{ association: 'inscriptionAsUser' },{association: 'inscriptionAsPeriod'}]});
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

InscriptionCtrl.consultarInscription = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await InscriptionModel.findOne({ where: { id: id },include: [{ association: 'InscriptionAsUser' },{association: 'InscriptionAsPeriod'}] });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

InscriptionCtrl.crearInscription = async(req,res)=>{
    const {price,description,idUser,idPeriod}= req.body 
    const result = await InscriptionModel.findOne({ where: { description: description} });
    if(result) {
        res.json({
            mensaje: 'la inscripción ya existe'
        })
    }
    else if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await InscriptionModel.create({price,description,idUser,idPeriod})
        res.json({
            mensaje: 'Inscription creada',
        })
    }
}

InscriptionCtrl.actualizarInscription = async (req, res) => {
    try {
        const { id } = req.params;
        let {price,description,idUser,idPeriod} = req.body;
        if (id === undefined || Inscription === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await InscriptionModel.update({price,description,idUser,idPeriod},{
            where: {
                id: id
            }
        })
        const user = await InscriptionModel.findOne({ where: { id: id } });
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

InscriptionCtrl.actualizarValorInscription2 = async (req, res) => {
    try {
        const { id } = req.params;
        let {price} = req.body;
        if (id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await InscriptionModel.update({price},{
            where: {
                id: id
            }
        })
        const user = await InscriptionModel.findOne({ where: { id: id } });
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

InscriptionCtrl.actualizarValorInscription = async (req, res) => {
    try {
        //const { id } = req.params;
        const { price } = req.body;
        const result = await bdSq.query("UPDATE inscriptions AS tab,(SELECT MAX( id ) AS maximo FROM inscriptions ) AS max SET tab.price =:parametro WHERE tab.id = max.maximo",{replacements:{parametro:`${price}`},type: QueryTypes.SELECT});
        if (!result) {
            return res.json({
                result: 'No hay datos',
            })
        }
        else {
                res.json({
                    mensaje: 'actualizado',
                    result
                })
             }
      
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

InscriptionCtrl.actualizarValorInscription3 = async (req, res) => {
    try {
        const { price } = req.params;
        const result = await bdSq.query("UPDATE inscriptions AS tab,(SELECT MAX( id ) AS maximo FROM inscriptions ) AS max SET tab.price =:parametro WHERE tab.id = max.maximo",{replacements:{parametro:price},type: QueryTypes.SELECT});
        if (!result) {
            return res.json({

                result: 'No se actualizo',
            })
        }
        else {
            res.json({
                result
            })
            }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= InscriptionCtrl