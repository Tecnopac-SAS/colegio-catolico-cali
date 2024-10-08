const historialAcademicoModel = require('../models/historialAcademico.model')
const histPreescolarModel = require('../models/histPreescolar.model')
const histPrimariaModel = require('../models/histPrimaria.model')
const histBachilleratoModel = require('../models/histBachillerato.model')
const {validationResult} = require("express-validator");
const historialAcademicoCtrl = {};

historialAcademicoCtrl.consultarhistorialAcademicoes = async (req, res) => {
    try {
        //const result = await historialAcademicoModel.findAll();
        const result = await historialAcademicoModel.findAll({include: {association: 'historialAcademicoAsEstudiante'}});
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

historialAcademicoCtrl.consultarhistorialAcademico = async (req, res) => {
    try {
        const {description} = req.params;
        const result = await historialAcademicoModel.findAll({
            where: {description: {[Op.like]: `${description}%`}},
            include: {association: 'historialAcademicoAsEstudiante'}
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

historialAcademicoCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await historialAcademicoModel.findOne({
            where: {id: id},
            include: {association: 'historialAcademicoAsEstudiante'}
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

historialAcademicoCtrl.crearhistorialAcademico = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {
        preescolar,
        primaria,
        bachillerato,
        anioAnterior,
        motivoRetiro,
        repeticionAnio,
        distincionAcademica,
        idEstudiante
    } = req.body

    for (const element of preescolar) {
        await histPreescolarModel.create({
            nombre: element.nombre,
            gradoCursadoPreescolar: (element.gradoCursadoPreescolar === true || element.gradoCursadoPreescolar === "true") ? true : false,
            gradoCursadoJardin: (element.gradoCursadoJardin === true || element.gradoCursadoJardin === "true") ? true : false,
            gradoCursadoTransicion: (element.gradoCursadoTransicion === true || element.gradoCursadoTransicion === "true") ? true : false,
            idEstudiante: element.idEstudiante
        })

    }
    for (const element of primaria) {
        await histPrimariaModel.create({
            nombre: element.nombre,
            gradoCursadoPrimaria1: (element.gradoCursadoPrimaria1 === true || element.gradoCursadoPrimaria1 === "true") ? true : false,
            gradoCursadoPrimaria2: (element.gradoCursadoPrimaria2 === true || element.gradoCursadoPrimaria2 === "true") ? true : false,
            gradoCursadoPrimaria3: (element.gradoCursadoPrimaria3 === true || element.gradoCursadoPrimaria3 === "true") ? true : false,
            gradoCursadoPrimaria4: (element.gradoCursadoPrimaria4 === true || element.gradoCursadoPrimaria4 === "true") ? true : false,
            gradoCursadoPrimaria5: (element.gradoCursadoPrimaria5 === true || element.gradoCursadoPrimaria5 === "true") ? true : false,
            idEstudiante: element.idEstudiante
        })

    }
    for (const element of bachillerato) {
        await histBachilleratoModel.create({
            nombre: element.nombre,
            gradoCursadoBachillerato6: (element.gradoCursadoBachillerato6 === true || element.gradoCursadoBachillerato6 === "true") ? true : false,
            gradoCursadoBachillerato7: (element.gradoCursadoBachillerato7 === true || element.gradoCursadoBachillerato7 === "true") ? true : false,
            gradoCursadoBachillerato8: (element.gradoCursadoBachillerato8 === true || element.gradoCursadoBachillerato8 === "true") ? true : false,
            idEstudiante: element.idEstudiante
        })

    }
    await historialAcademicoModel.create({
        anioAnterior,
        motivoRetiro,
        repeticionAnio,
        distincionAcademica,
        idEstudiante
    })
    res.json({
        mensaje: 'historial Academico  creado',
    })


}


historialAcademicoCtrl.actualizarhistorialAcademico = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {id} = req.params;
        const {
            preescolar,
            gradoCursadoPreescolar,
            gradoCursadoJardin,
            gradoCursadoTransicion,
            primaria,
            gradoCursadoPrimaria1,
            gradoCursadoPrimaria2,
            gradoCursadoPrimaria3,
            gradoCursadoPrimaria4,
            gradoCursadoPrimaria5,
            bachillerato,
            gradoCursadoBachillerato6,
            gradoCursadoBachillerato7,
            gradoCursadoBachillerato8,
            anioAnterior,
            motivoRetiro,
            repeticionAnio,
            distincionAcademica
        } = req.body;

        await historialAcademicoModel.update({
            preescolar,
            gradoCursadoPreescolar,
            gradoCursadoJardin,
            gradoCursadoTransicion,
            primaria,
            gradoCursadoPrimaria1,
            gradoCursadoPrimaria2,
            gradoCursadoPrimaria3,
            gradoCursadoPrimaria4,
            gradoCursadoPrimaria5,
            bachillerato,
            gradoCursadoBachillerato6,
            gradoCursadoBachillerato7,
            gradoCursadoBachillerato8,
            anioAnterior,
            motivoRetiro,
            repeticionAnio,
            distincionAcademica
        }, {
            where: {
                id: id
            }
        })
        const user = await historialAcademicoModel.findOne({where: {id: id}});
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

historialAcademicoCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {id} = req.params;
        const {isActive} = req.body;

        await historialAcademicoModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await historialAcademicoModel.findOne({where: {id: id}});
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


module.exports = historialAcademicoCtrl