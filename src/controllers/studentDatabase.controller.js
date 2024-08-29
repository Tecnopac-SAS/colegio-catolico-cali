const {sequelize, Op} = require('sequelize');
const {QueryTypes} = require('sequelize');
const bdSq = require('../db/databaseSq')
const studentDatabaseModel = require('../models/studentDatabase.model')
const pensionModel = require('../models/pension.model')
const matriculaModel = require('../models/tuitionType.model')
const userModel = require('../models/user.model')
const {validationResult} = require("express-validator");
const studentDatabaseCtrl = {};

studentDatabaseCtrl.getPension = async (req, res) => {
    try {
        const resultUser = await userModel.findOne({
            where: {id: req.body.id},
            include: {association: 'userAsAcudiente'}
        });
        let user = resultUser.userAsAcudiente
        const resultStudent = await studentDatabaseModel.findOne({where: {id: user.idEstudiante}});

        if(resultStudent.idGrade){
            return res.json({
                status: 404,
                mensaje: 'No hay resuldatos del estudiante'
            })
        }

        const resultPension = await pensionModel.findOne({where: {idGrade: resultStudent.idGrade}});

        res.json({
            status: 200,
            mensaje: 'ok',
            result: resultPension
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}
studentDatabaseCtrl.getMatricula = async (req, res) => {
    try {
        const resultUser = await userModel.findOne({
            where: {id: req.body.id},
            include: {association: 'userAsAcudiente'}
        });
        let user = resultUser.userAsAcudiente
        let type;
        const resultStudent = await studentDatabaseModel.findOne({where: {id: user.idEstudiante}});

        if(resultStudent.idGrade){
            return res.json({
                status: 404,
                mensaje: 'No hay resuldatos del estudiante'
            })
        }

        const resultMatricula = await matriculaModel.findOne({where: {idGrade: resultStudent.idGrade}});

        fechaActual = new Date()

        if (resultMatricula?.extraordinary_price > 0) {

            type = 'extraordinaria';

            matriculaValidada = (fechaActual >= resultMatricula.extraordinary_startDate && fechaActual <= resultMatricula.extraordinary_finalDate) ? resultMatricula?.extraordinary_price : resultMatricula?.surcharge;

        } else {
            type = 'ordinaria';
            matriculaValidada = (fechaActual >= resultMatricula.startDate && fechaActual <= resultMatricula.finalDate) ? resultMatricula?.ordinary_price : resultMatricula?.surcharge;
        }

        res.json({
            status: 200,
            mensaje: 'ok',
            result: {type: type, value: matriculaValidada}
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}
studentDatabaseCtrl.consultarStudentDatabases = async (req, res) => {
    try {
        const result = await studentDatabaseModel.findAll();
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

studentDatabaseCtrl.consultarStudentDatabase = async (req, res) => {
    try {
        const {nombres, estadoEstudiante} = req.params;
        const result = await studentDatabaseModel.findAll({
            where: {
                nombres: {[Op.like]: `${nombres}%`},
                estadoEstudiante: estadoEstudiante
            }
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

studentDatabaseCtrl.consultarStudentEstados = async (req, res) => {
    try {
        const {estadoEstudiante} = req.params;
        const result = await studentDatabaseModel.findAll({where: {estadoEstudiante: {[Op.like]: `${estadoEstudiante}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.consultarId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await studentDatabaseModel.findOne({where: {id: id}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.crearStudentDatabase = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        codigo,
        grado,
        nombres,
        apellidos,
        tipoDocumento,
        identificacion,
        expedicion,
        lugarNacimiento,
        fechaNacimiento,
        edad,
        direccion,
        tipoDireccion,
        barrio,
        estrato,
        telefono,
        correo,
        tipoCupo
    } = req.body


    try {
        const data = await studentDatabaseModel.create({
            codigo,
            grado,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
        })

        let idEstudiante = data.id

        res.json({
            mensaje: 'Estudiante creado',
            idEstudiante: idEstudiante,
        })
    }catch (error){
        res.status(500);
        res.send(error.message);
    }


}

studentDatabaseCtrl.actualizarStudentDatabase = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {id} = req.params;
        let {
            codigo,
            grado,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
            estadoEstudiante,
            viveCon,
            idGrade
        } = req.body;

        await studentDatabaseModel.update({
            codigo,
            grado,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
            estadoEstudiante,
            viveCon,
            idGrade
        }, {
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({where: {id: id}});
        if (user) {
            res.json({
                mensaje: 'ok',
                result: user
            })
        } else {
            res.json({
                mensaje: 'Estudiante no encontrado',
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.deshabilitar = async (req, res) => {
    try {
        const {id} = req.params;
        const {isActive} = req.body;
        if (isActive === null) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await studentDatabaseModel.update({isActive}, {
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({where: {id: id}});
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

studentDatabaseCtrl.cambiarEstado = async (req, res) => {
    try {
        const {id} = req.params;
        const {estadoEstudiante} = req.body;
        if (estadoEstudiante === null) {
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }
        await studentDatabaseModel.update({estadoEstudiante}, {
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({where: {id: id}});
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

studentDatabaseCtrl.studentDatabaseCount = async (req, res) => {
    try {
        const {estadoEstudiante} = req.params;
        const result = await bdSq.query("SELECT COUNT(*) as contador FROM estudiantes where estudiantes.estadoEstudiante=:parametro ", {
            replacements: {parametro: `${estadoEstudiante}`},
            type: QueryTypes.SELECT
        });
        if (!result) {
            return res.json({

                result: 'No hay datos',
            })
        } else {
            res.json({
                result
            })
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = studentDatabaseCtrl