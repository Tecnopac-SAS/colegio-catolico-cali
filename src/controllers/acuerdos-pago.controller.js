const config = require('../../config')
const { sequelize, Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const matriculaModel = require('../models/tuitionType.model')
const acudienteModel = require('../models/acudiente.model')
const pensionMesesModel = require('../models/pensionMeses.model')
const acuerdosPagoModel = require('../models/acuerdos-pago.model')
const acuerdosPagosCuotas = require('../models/acuerdos-pago-cuotas.model')
const moment = require('moment');
const acuerdosPagos = {};




acuerdosPagos.crearAcuerdoPago = async (req, res) => {
    const { fecha, description, valor, estado, idAcudiente, cuotas } = req.body;
    if (!fecha || !description || !valor || !estado || !idAcudiente || !cuotas) {
        return res.status(400).json({ message: "Bad Request. Please fill all fields." });
    }

    try {
        // Crear el acuerdo de pago
        const nuevoAcuerdo = await acuerdosPagoModel.create({ fecha, description, valor, estado, idAcudiente });

        // Verificar si se creó correctamente el acuerdo de pago
        if (nuevoAcuerdo) {
            // Obtener el ID del nuevo acuerdo de pago
            const idAcuerdoPago = nuevoAcuerdo.id;

            // Iterar sobre las cuotas y crear cada una, utilizando el id del nuevo acuerdo de pago
            for (const cuotaData of cuotas) {
                const { cuota, fechaPago, monto } = cuotaData;
                const formattedFechaPago = moment(fechaPago, "DD-MM-YYYY").format("YYYY-MM-DD");

                await acuerdosPagosCuotas.create({ cuota, fechaPago: formattedFechaPago, monto, idAcuerdoPago });
            }

            res.json({
                status: 200,
                mensaje: 'Acuerdo de Pago creado con exito',
            });
        } else {
            res.status(400).json({
                mensaje: 'Error al crear Acuerdo de Pago',
            });
        }
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en la consulta',
            error: error.message,
        });
    }
};



acuerdosPagos.consultarAcuerdosPagos = async (req, res) => {
    try {
        const result = await acuerdosPagoModel.findAll({ include: { association: 'AcuerdosPagosAsAcuerdosPagosCuotas', association: 'AcuerdosPagosAsAcudiente' } });
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

acuerdosPagos.consultarAcuerdosPagosCuotas = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await acuerdosPagosCuotas.findAll({ where: { idAcuerdoPago: id}});
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

acuerdosPagos.consultarAcuerdoPagoSearch = async (req, res) => {
    try {
        let { dato, id } = req.params;
        dato = decodeURIComponent(dato)
        let results = [];
        let tabla = []
        result = await certificateInscription.findAll({ where: { idEstudiante: id }, include: { association: 'certificateInscriptionAsCertificate' } });
        result.forEach(element => {
            tabla.push(element)
        });
        for (var i = 0; i < tabla.length; i++) {
            for (key in tabla[i]['certificateInscriptionAsCertificate'].dataValues) {
                if (key != 'createdAt' && key != 'updatedAt') {
                    if (String(tabla[i]['certificateInscriptionAsCertificate'][key]).indexOf(dato) != -1) {
                        results.push(tabla[i]);
                        break;
                    }
                }
            }
        }


        res.json({
            status: 200,
            mensaje: 'ok',
            result: results
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

acuerdosPagos.editarAcuerdoPago = async (req, res) => {
    const { id } = req.params;
    const { fecha, description, valor, estado, idAcudiente, cuotas } = req.body;
    try {
        if (deudaCode === null || concepto === null || fechaInicio === null || fechaFinal === null || monto === null || cobro === null || cobroValue === null || estado === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        data = acuerdosPagoModel.update({
            deudaCode: deudaCode,
            concepto: concepto,
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            monto: monto,
            estado: estado,
            cobro: cobro,
            cobroValue: cobroValue
        },
            {
                where: {
                    id: id
                }
            }
        )
        if (data) {
            res.json({
                status: 200,
                mensaje: 'Acuerdo de Pago editado con exito',
                result: {
                    deudaCode: deudaCode
                },
            });
        } else {
            res.json({
                status: 400,
                mensaje: 'Error al editar',
                result: data
            });
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

acuerdosPagos.consultarAcuerdoPago = async (req, res) => {
    try {
        const { id } = req.params
        deuda = await acuerdosPagoModel.findOne({
            where: {
                id: id
            }
        });
        res.json({
            status: 200,
            mensaje: 'ok',
            result: deuda
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

acuerdosPagos.consultarAcuerdoPagoByAcudiente = async (req, res) => {
    try {
        const { id } = req.params
        const acuerdosAcudiente = await acuerdosPagoModel.findAll({
            where: {
                idAcudiente: id
            }
        });
        res.json({
            status: 200,
            mensaje: 'ok',
            result: acuerdosAcudiente
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

acuerdosPagos.consultarMatriculaAndPensionValue = async (req, res) => {
    try {
        const { id } = req.params
        const resultAcudiente = await acudienteModel.findOne({ where: { id: id }, include: { association: 'acudienteAsEstudiante' } });
        let acudiente = resultAcudiente.acudienteAsEstudiante;
        const resultMatricula = await matriculaModel.findOne({ where: { idGrade: acudiente?.idGrade } });
        const resultPensionMeses = await pensionMesesModel.findAll({ where: { idAcudiente: id }});
        data = {
            matricula: { 
                id: resultMatricula?.id ? resultMatricula?.id : 0,
                valorMatricula: resultMatricula?.ordinary_price ? resultMatricula?.ordinary_price : 0
            }, 
            pension: { 
                id: resultPensionMeses[0]?.id ? resultPensionMeses[0]?.id : 0,
                valorPension: resultPensionMeses[0]?.valor ? resultPensionMeses[0]?.valor : 0
            }
        };

        res.json({
                status: 200,
                mensaje: 'ok',
                result: data
            });

        } catch (error) {
            res.status(500);
            res.send(error.message);
            res.json({
                mensaje: 'Error en la consulta'
            })
        }
    }

module.exports = acuerdosPagos