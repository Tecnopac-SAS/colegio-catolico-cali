const config = require('../../config')
const sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const inscriptionModel = require('../models/inscription.model')
const {validationResult} = require("express-validator");
const inscriptionCtrl = {};

inscriptionCtrl.consultarInscriptions = async (req, res) => {
    try {
        const result = await inscriptionModel.findAll({include: [{association: 'inscriptionAsUser'}, {association: 'inscriptionAsPeriod'}]});
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

inscriptionCtrl.consultarInscription = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await inscriptionModel.findOne({
            where: {id: id},
            include: [{association: 'inscriptionAsUser'}, {association: 'inscriptionAsPeriod'}]
        });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

inscriptionCtrl.crearInscription = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {price, description, idUser, idPeriod} = req.body
    const result = await inscriptionModel.findOne({where: {description: description}});
    if (result) {
        res.json({
            mensaje: 'la inscripción ya existe'
        })
    } else if (description == null) {
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    } else {

        await inscriptionModel.create({price, description, idUser, idPeriod})
        res.json({
            mensaje: 'Inscription creada',
        })
    }
}

inscriptionCtrl.actualizarInscription = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        let {price, description, idUser, idPeriod} = req.body;
        if (id === undefined || description === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await inscriptionModel.update({price, description, idUser, idPeriod}, {
            where: {
                id: id
            }
        })
        const user = await inscriptionModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'Inscripción no encontrada',
            })
        } else {
            res.json({
                mensaje: 'ok',
                result: user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

inscriptionCtrl.actualizarValorInscription = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {price} = req.body;
        const result = await bdSq.query("UPDATE inscriptions AS tab,(SELECT MAX( id ) AS maximo FROM inscriptions ) AS max SET tab.price =:parametro WHERE tab.id = max.maximo", {
            replacements: {parametro: `${price}`},
            type: QueryTypes.SELECT
        });
        if (result) {
            res.status(200).json({
                mensaje: 'actualizado',
            })

        } else {
            res.status(401).json({
                result: 'No hay datos',
            })
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


module.exports = inscriptionCtrl