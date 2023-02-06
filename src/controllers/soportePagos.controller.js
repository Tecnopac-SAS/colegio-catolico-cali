const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const coursesInscriptionModel = require('../models/coursesInscription.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const matriculasPagosModel = require('../models/matriculasPagos.model')
const pensionMesesModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const soportePagosCtrl = {};

soportePagosCtrl.listarMisSoportesPagos = async(req,res)=>{
    const { id } = req.params;
    try {
        result = await coursesInscriptionModel.findAll({ where:{ idEstudiante:id}});
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

soportePagosCtrl.listarMisSoportesPagosSearch = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await acudiente.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= soportePagosCtrl