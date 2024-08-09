const {sequelize, Op} = require('sequelize');
const discountModel = require('../models/discount.model')
const {validationResult} = require("express-validator");
const discountCtrl = {};

discountCtrl.consultarDiscounts = async (req, res) => {

    try {
        const result = await discountModel.findAll({where: {isActive: 1}});
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

discountCtrl.consultarDiscount = async (req, res) => {
    try {
        const {name} = req.params;
        const result = await discountModel.findAll({where: {name: {[Op.like]: `${name}%`, isActive: 1}}});
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
        const {id} = req.params;
        const result = await discountModel.findOne({where: {id: id, isActive: 1}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

discountCtrl.crearDiscount = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {name, starDate, finalDate, percentage, useType, frequency, service, status} = req.body

    try {
        await discountModel.create({name, starDate, finalDate, percentage, useType, frequency, service, status})
        res.json({
            mensaje: 'Descuento Creado',
        })
    } catch (error) {
        req.status(500).send(error);
    }
}

discountCtrl.actualizarDiscount = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {id} = req.params;
        let {name, starDate, finalDate, percentage, useType, frequency, service, isActive, status} = req.body;
        await discountModel.update({
            name,
            starDate,
            finalDate,
            percentage,
            useType,
            frequency,
            service,
            isActive,
            status
        }, {
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'descuento no encontrado',
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

discountCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {id} = req.params;
        const {status} = req.body;

        await discountModel.update({status}, {
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({where: {id: id}});
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

discountCtrl.eliminar = async (req, res) => {
    try {
        const {id} = req.params;
        const {isActive} = req.body;
        if (isActive === null) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await discountModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await discountModel.findOne({where: {id: id}});
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

module.exports = discountCtrl