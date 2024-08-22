const {sequelize, Sequelize, Op, fn, col} = require('sequelize');
const coursesInscriptionModel = require('../models/coursesInscription.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const matriculasPagosModel = require('../models/matriculasPagos.model')
const pensionMesesModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const moment = require('moment');
const historicoCarteraCtrl = {};


historicoCarteraCtrl.totalDeuda = async (req, res) => {
    const {id} = req.params;
    try {
        let result = await pensionMesesModel.findAll({where: {idAcudiente: id, estatus: 'Pendiente'}});

        let total = 0;

        result.forEach(element => {
            total = total + ((element.valorConDescuento) ? element.valorConDescuento : element.valor)
        });

        res.json({
            status: 200,
            result: total
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

historicoCarteraCtrl.totalDeudas = async (req, res) => {
    try {
        const result = await pensionMesesModel.findAll({
            attributes: [
                'idAcudiente',
                'idPension',
                'estatus',
                'fechaPago',
                'idPension',
                'mora',
                [Sequelize.fn('SUM', Sequelize.col('valor')), 'valorTotal']
            ],
            where: {estatus: 'Pendiente'},
            group: ['idAcudiente', 'idPension'],
            order: [
                ['idAcudiente', 'ASC'],
                ['idPension', 'ASC']
            ],
            include: {association: 'pensionesMesesAsAcudiente'}
        });

        res.json({
            status: 200,
            result: result
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en la consulta',
            error: error.message
        });
    }
};
historicoCarteraCtrl.totalDeudasAcudiente = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pensionMesesModel.findAll({
            where: {idAcudiente: id, estatus: 'Pendiente'},
            include: {association: 'pensionesMesesAsAcudiente'}
        });
        res.json({
            status: 200,
            result: result
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en la consulta',
            error: error.message
        });
    }
};
historicoCarteraCtrl.listarHistoricoCartera = async (req, res) => {
    const {id} = req.params;
    try {
        acudient = await acudiente.findOne({where: {id: id}, include: {association: 'acudienteAsEstudiante'}});

        let result = await pensionMesesModel.findAll({where: {idAcudiente: acudient.id, estatus: 'Pendiente'}});

        let tabla = []
        let total = 0;
        result.forEach(element => {
            total = total + ((element.valorConDescuento) ? element.valorConDescuento : element.valor)
        });
        tabla.push({servicio: 'Pension', tipo: 'Tipo', fecha: new Date(), total: total, link: 'pago-pension'})

        res.json({
            status: 200,
            mensaje: 'ok',
            result: tabla
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

historicoCarteraCtrl.listarHistoricoCarteraSearch = async (req, res) => {
    try {
        let {dato, id} = req.params;
        dato = decodeURIComponent(dato)
        acudient = await acudiente.findOne({
            where: {idEstudiante: id},
            include: {association: 'acudienteAsEstudiante'}
        });

        let tabla = []
        let results = [];
        let result = await coursesInscriptionModel.findAll({where: {idEstudiante: id}});
        result.forEach(element => {
            tabla.push({
                codigo: acudient.acudienteAsEstudiante.codigo,
                tipo: 'curso',
                fecha: moment(element.createdAt).format('DD/MM/YYYY'),
                viaPago: element.metodoPago
            })
        });
        result = await extracurricularInscriptionModel.findAll({where: {idEstudiante: id}});
        result.forEach(element => {
            tabla.push({
                codigo: acudient.acudienteAsEstudiante.codigo,
                tipo: 'extracurricular',
                fecha: moment(element.createdAt).format('DD/MM/YYYY'),
                viaPago: element.metodoPago
            })
        });

        result = await matriculasPagosModel.findAll({where: {idAcudiente: acudient.id}});
        result.forEach(element => {
            tabla.push({
                codigo: acudient.acudienteAsEstudiante.codigo,
                tipo: 'pago matricula',
                fecha: moment(element.createdAt).format('DD/MM/YYYY'),
                viaPago: element.metodoPago
            })
        });

        result = await pensionMesesModel.findAll({where: {idAcudiente: acudient.id, estatus: 'Pagado'}});
        result.forEach(element => {
            tabla.push({
                codigo: acudient.acudienteAsEstudiante.codigo,
                tipo: 'pago pension',
                fecha: moment(element.updatedAt).format('DD/MM/YYYY'),
                viaPago: element.metodoPago
            })
        });

        for (var i = 0; i < tabla.length; i++) {
            for (key in tabla[i]) {
                if (tabla[i][key].indexOf(dato) !== -1) {
                    results.push(tabla[i]);
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

module.exports = historicoCarteraCtrl