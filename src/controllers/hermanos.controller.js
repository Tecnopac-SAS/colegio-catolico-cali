const hermanoModel = require('../models/hermanos.model')
const {validationResult} = require("express-validator");
const hermanoCtrl = {};

hermanoCtrl.consultarHermano = async (req, res) => {
    try {
        //const result = await hermanoModel.findAll();
        const result = await hermanoModel.findAll({include: {association: 'hermanoAsEstudiante'}});
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

hermanoCtrl.consultarHermanoCriterio = async (req, res) => {
    try {
        const {description} = req.params;
        const result = await hermanoModel.findAll({
            where: {description: {[Op.like]: `${description}%`}},
            include: {association: 'hermanoAsEstudiante'}
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

hermanoCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await hermanoModel.findOne({where: {id: id}, include: {association: 'hermanoAsEstudiante'}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

hermanoCtrl.crearHermanos = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {nombres, apellidos, nivelEstudio, institucion, idEstudiante} = req.body

    await hermanoModel.create({nombres, apellidos, nivelEstudio, institucion, idEstudiante})
    res.json({
        mensaje: 'Hermano creado',
    })

}


hermanoCtrl.actualizarhermano = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        const {nombres, apellidos, nivelEstudio, institucion} = req.body;

        await hermanoModel.update({nombres, apellidos, nivelEstudio, institucion}, {
            where: {
                id: id
            }
        })
        const user = await hermanoModel.findOne({where: {id: id}});
        if (user === null) {
            return res.json({
                mensaje: 'historial Academico no encontrado',
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

hermanoCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        const {isActive} = req.body;

        await hermanoModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await hermanoModel.findOne({where: {id: id}});
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


module.exports = hermanoCtrl