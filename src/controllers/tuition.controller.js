const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const tuitionModel = require('../models/tuition.model')
const {validationResult} = require("express-validator");
const tuitionCtrl = {};

tuitionCtrl.consultarTuitions = async (req, res) => {
    try {
        //const result = await tuitionModel.findAll({ include: [{ association: 'tuitionAsTuitionType' }]});
        const result = await bdSq.query("SELECT tuitiontypes.grade, tuitiontypes.description,tuitiontypes.isActive AS isActive,tuitiontypes.price,tuitiontypes.startDate ,tuitiontypes.finalDate,tuitiontypes.surcharge,tuitiontypes.id FROM tuitions INNER JOIN tuitiontypes ON tuitions.idTuition = tuitiontypes.id", {type: QueryTypes.SELECT});
        // const result = await tuitionModel.findAll();
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

tuitionCtrl.consultarTuition = async (req, res) => {
    try {
        const {description} = req.params;
        const result = await bdSq.query("SELECT tuitiontypes.description,tuitiontypes.isActive as isActive,tuitiontypes.price,tuitiontypes.startDate,tuitiontypes.finalDate,tuitiontypes.surcharge,tuitiontypes.id FROM tuitions INNER JOIN tuitiontypes ON tuitions.idTuition = tuitiontypes.id   where  tuitiontypes.description LIKE :parametro", {
            replacements: {parametro: `${description}%`},
            type: QueryTypes.SELECT
        });
        res.json({
            status: 200,
            mensaje: 'ok',
            result
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

tuitionCtrl.crearTuition = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {tuition} = req.body
    const result = await tuitionModel.findOne({where: {tuition: tuition}});
    if (result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    }

    await tuitionModel.create({tuition})
    res.json({
        mensaje: 'Rol creado',
        id: email,
        token,
        password: password
    })

}

module.exports = tuitionCtrl