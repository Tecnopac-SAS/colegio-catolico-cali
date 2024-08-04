const config = require('../../config')
const sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const gradesModel = require('../models/grade.model')
const {validationResult} = require("express-validator");
const gradesCtrl = {};

gradesCtrl.consultarGrades = async (req, res) => {
    try {
        const result = await gradesModel.findAll();
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

gradesCtrl.crearGrades = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {description, isActive} = req.body;

    const result = await gradesModel.findOne({where: {description}});

    if (result) {
        res.json({
            mensaje: 'El grade ya existe'
        })
    } else {
        try {
            const resp =  await gradesModel.create({description, isActive})
            res.json({
                mensaje: 'El grade creado.',
                resp
            })
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = gradesCtrl