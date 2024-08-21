const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const canalReferenciaModel = require('../models/canalReferencia.model')
const {validationResult} = require("express-validator");
const canalReferenciaCtrl = {};

canalReferenciaCtrl.consultarCanalReferencias = async (req, res) => {
    try {
        const result = await canalReferenciaModel.findAll();
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

canalReferenciaCtrl.consultarCanalReferencia = async (req, res) => {
    try {
        const {description} = req.params;
        const result = await canalReferenciaModel.findAll({where: {description: {[Op.like]: `${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

canalReferenciaCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await canalReferenciaModel.findOne({where: {id: id}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

canalReferenciaCtrl.crearCanalReferencia = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        comoSeEntero,
        comoSabe,
        porqueIngresar,
        nombreAcudiente,
        aceptaCompromisos,
        estadoPago,
        idEstudiante
    } = req.body

    if (comoSeEntero == null) {
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    } else {

        const data = await canalReferenciaModel.create({
            comoSeEntero,
            comoSabe,
            porqueIngresar,
            nombreAcudiente,
            aceptaCompromisos,
            estadoPago,
            idEstudiante
        })
        res.json({
            mensaje: 'Canal de referencia creado',
        })
    }

}

canalReferenciaCtrl.actualizarCanalReferencia = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        let {
            comoSeEntero,
            comoSabe,
            porqueIngresar,
            nombreAcudiente,
            aceptaCompromisos,
            estadoPago,
            idEstudiante
        } = req.body;
        if (id === undefined || description === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await canalReferenciaModel.update({
            comoSeEntero,
            comoSabe,
            porqueIngresar,
            nombreAcudiente,
            aceptaCompromisos,
            estadoPago,
            idEstudiante
        }, {
            where: {
                id: id
            }
        })
        const user = await canalReferenciaModel.findOne({where: {id: id}});
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

canalReferenciaCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        const {isActive} = req.body;
        if (isActive === null) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await canalReferenciaModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await canalReferenciaModel.findOne({where: {id: id}});
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

module.exports = canalReferenciaCtrl