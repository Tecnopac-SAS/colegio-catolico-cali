const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const levelingModel = require('../models/leveling.model')
const estudianteModel = require('../models/studentDatabase.model')
const {validationResult} = require("express-validator");
const levelingCtrl = {};

levelingCtrl.consultarLevelings = async (req, res) => {
    try {
        const result = await levelingModel.findAll({include: {association: 'levelingAsEstudiante'}});
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

levelingCtrl.consultarLeveling = async (req, res) => {
    try {
        const {codigo} = req.params;
        //const result = await bdSq.query("SELECT estudiantes.codigo, estudiantes.nombres,estudiantes.apellidos,levelings.idEstudiante,levelings.asignatura, levelings.estadoAprobado,levelings.grado FROM levelings INNER JOIN estudiantes ON levelings.idEstudiante = estudiantes.id where estudiantes.codigo =:parametro",{replacements:{parametro:`${codigo}`},type: QueryTypes.SELECT});
        const result = await levelingModel.findAll({
            where: {'$levelingAsEstudiante.codigo$': codigo},
            include: {association: 'levelingAsEstudiante'}
        });
        //const result = await estudianteModel.findAll({ where: { codigo:{[Op.like]:`${codigo}%`}},include: { association: 'estudianteAsLeveling' }});
        res.json({
            mensaje: 'ok',
            result: result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

levelingCtrl.consultarStudentDatabases = async (req, res) => {
    try {
        const {codigo} = req.params;
        const result = await estudianteModel.findAll({where: {codigo: codigo}});
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

levelingCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await levelingModel.findOne({where: {id: id}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

levelingCtrl.crearLeveling = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {modalidadCurso, asignatura, isActive, estadoAprobado, grado, idEstudiante} = req.body;

    const data = await levelingModel.create({
        modalidadCurso,
        asignatura,
        isActive,
        estadoAprobado,
        grado,
        idEstudiante
    })
    res.json({
        mensaje: 'Nivelación creada',
    })
}

levelingCtrl.actualizarLeveling = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {id} = req.params;
    let {modalidadCurso, asignaturaisActive, estadoAprobado, grado, idEstudiante} = req.body;

    try {

        await levelingModel.update({modalidadCurso, asignaturaisActive, estadoAprobado, grado, idEstudiante}, {
            where: {
                id: id
            }
        })
        const user = await levelingModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'curso no encontrado',
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

levelingCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {id} = req.params;
    const {isActive} = req.body;
    try {
        await levelingModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await levelingModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'usuario no encontrado',
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

levelingCtrl.cambiarEstado = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {id} = req.params;
    const {estadoAprobado} = req.body;

    try {
        await levelingModel.update({estadoAprobado}, {
            where: {
                id: id
            }
        })
        const user = await levelingModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'usuario no encontrado',
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
module.exports = levelingCtrl