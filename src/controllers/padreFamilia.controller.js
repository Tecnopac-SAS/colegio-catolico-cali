const config = require('../../config')
const sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const padreFamiliaModel = require('../models/padreFamilia.model')
const acudienteModel = require('../models/acudiente.model')
const responsableModel = require('../models/responsableFacturacion.model');
const studentDatabase = require('../models/studentDatabase.model');
const {join} = require('path');
const {validationResult} = require("express-validator");
const padreFamiliaCtrl = {};

padreFamiliaCtrl.consultarPadreFamilia = async (req, res) => {
    try {
        //const result = await padreFamiliaModel.findAll();
        const result = await padreFamiliaModel.findAll({include: {association: 'padreFamiliaAsEstudiante'}});
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

padreFamiliaCtrl.consultarPadreFamiliaCriterio = async (req, res) => {
    try {
        const {description} = req.params;
        const result = await padreFamiliaModel.findAll({
            where: {description: {[Op.like]: `${description}%`}},
            include: {association: 'padreFamiliaAsEstudiante'}
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

padreFamiliaCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await padreFamiliaModel.findOne({
            where: {id: id},
            include: {association: 'padreFamiliaAsEstudiante'}
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
padreFamiliaCtrl.getAllAcudiente = async (req, res) => {
    try {
        const {id} = req.params;
        const acudiente = await acudienteModel.findOne({
            where: {id: id},
            include: {association: 'acudienteAsEstudiante'}
        });
        const responsable = await responsableModel.findOne({where: {idEstudiante: acudiente.idEstudiante}});
        const padre = await padreFamiliaModel.findOne({
            where: {
                idEstudiante: acudiente.idEstudiante,
                parentesco: 'Padre'
            }
        });
        const madre = await padreFamiliaModel.findOne({
            where: {
                idEstudiante: acudiente.idEstudiante,
                parentesco: 'Madre'
            }
        });
        res.json({
            mensaje: 'ok',
            result: {acudiente, padre, madre, responsable}
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
padreFamiliaCtrl.actualizarAcudiente = async (req, res) => {
    try {
        const {id} = req.params;
        const {acudiente, estudiante, madre, padre, responsable} = req.body;
        if (id === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }

        let acudienteRes = await acudienteModel.update({...acudiente}, {
            where: {
                id: acudiente.id
            }
        })
        let studentRes = await studentDatabase.update({...estudiante}, {
            where: {
                id: estudiante.id
            }
        })
        let madreRes = await padreFamiliaModel.update({...madre}, {
            where: {
                id: madre.id
            }
        })
        let padreRes = await padreFamiliaModel.update({...padre}, {
            where: {
                id: padre.id
            }
        })
        let responsableRes = await responsableModel.update({...responsable}, {
            where: {
                id: responsable.id
            }
        })
        if (acudienteRes, studentRes, madreRes, padreRes, responsableRes) {

            res.json({
                status: 200,
                mensaje: 'Datos actualizados',
            })
        } else {
            res.json({
                status: 500,
                mensaje: 'Error al actualizar los datos',
            })
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

padreFamiliaCtrl.crearPadreFamilia = async (req, res) => {
    const {
        estado,
        vive,
        tipoDocumento,
        identificacion,
        nombres,
        apellidos,
        profesion,
        dondeTrabaja,
        cargo,
        ingresoMensual,
        correoElectronico,
        direccion,
        telefono,
        celular,
        idEstudiante
    } = req.body
    if (estado == "") {
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    } else {
        await padreFamiliaModel.create({
            estado,
            vive,
            tipoDocumento,
            identificacion,
            nombres,
            apellidos,
            profesion,
            dondeTrabaja,
            cargo,
            ingresoMensual,
            correoElectronico,
            direccion,
            telefono,
            celular,
            idEstudiante,
            parentesco: 'Padre'
        })
        res.json({
            mensaje: 'Padre de familia creado',
        })
    }

}

padreFamiliaCtrl.crearMadreFamilia = async (req, res) => {
    const {
        estado,
        vive,
        tipoDocumento,
        identificacion,
        nombres,
        apellidos,
        profesion,
        dondeTrabaja,
        cargo,
        ingresoMensual,
        correoElectronico,
        direccion,
        telefono,
        celular,
        idEstudiante
    } = req.body
    if (estado == "") {
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    } else {
        await padreFamiliaModel.create({
            estado,
            vive,
            tipoDocumento,
            identificacion,
            nombres,
            apellidos,
            profesion,
            dondeTrabaja,
            cargo,
            ingresoMensual,
            correoElectronico,
            direccion,
            telefono,
            celular,
            idEstudiante,
            parentesco: 'Madre'
        })
        res.json({
            mensaje: 'Madre de familia creado',
        })
    }

}

padreFamiliaCtrl.crearAcudiente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        parentesco,
        estado,
        vive,
        tipoDocumento,
        identificacion,
        nombres,
        apellidos,
        profesion,
        dondeTrabaja,
        cargo,
        ingresoMensual,
        correoElectronico,
        direccion,
        telefono,
        celular,
        idEstudiante
    } = req.body;

    try {
        await acudienteModel.create({
            parentesco,
            estado,
            vive,
            tipoDocumento,
            identificacion,
            nombres,
            apellidos,
            profesion,
            dondeTrabaja,
            cargo,
            ingresoMensual,
            correoElectronico,
            direccion,
            telefono,
            celular,
            idEstudiante
        })
        res.json({
            mensaje: 'Acudiente  creado',
        })
    } catch (e) {
        console.log(e);
    }
}


padreFamiliaCtrl.crearResponsable = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        tipoPersona,
        razonSocial,
        tipoDocumento,
        identificacion,
        direccion,
        pais,
        departamento,
        ciudad,
        correoElectronico,
        celular,
        idEstudiante,
        responsable
    } = req.body

    await responsableModel.create({
        tipoPersona,
        razonSocial,
        tipoDocumento,
        identificacion,
        direccion,
        pais,
        departamento,
        ciudad,
        correoElectronico,
        celular,
        idEstudiante,
        responsable
    })
    res.json({
        mensaje: 'Responsable creado',
    })


}


padreFamiliaCtrl.actualizarPadreFamilia = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }


    try {
        const {id} = req.params;
        const {
            estado,
            vive,
            tipoDocumento,
            identificacion,
            nombres,
            apellidos,
            profesion,
            dondeTrabaja,
            cargo,
            ingresoMensual,
            correoElectronico,
            direccion,
            telefono,
            celular
        } = req.body;

        await padreFamiliaModel.update({
            estado,
            vive,
            tipoDocumento,
            identificacion,
            nombres,
            apellidos,
            profesion,
            dondeTrabaja,
            cargo,
            ingresoMensual,
            correoElectronico,
            direccion,
            telefono,
            celular
        }, {
            where: {
                id: id
            }
        })
        const user = await padreFamiliaModel.findOne({where: {id: id}});
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


padreFamiliaCtrl.deshabilitar = async (req, res) => {
    try {
        const {id} = req.params;
        const {isActive} = req.body;
        if (isActive === null) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await padreFamiliaModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await padreFamiliaModel.findOne({where: {id: id}});
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


module.exports = padreFamiliaCtrl