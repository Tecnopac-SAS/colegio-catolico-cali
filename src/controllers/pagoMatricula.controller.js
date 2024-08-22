const matricula = require('../models/matriculasPagos.model')
const pensiones = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const {sequelize, Op} = require('sequelize');
const moment = require('moment');
const { json } = require('body-parser');
const {validationResult} = require("express-validator");
const matriculaCtrl = {};



matriculaCtrl.crearPago = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    let {monto, metodoPago, jornada, idAcudiente, valMes, meses, idPension} = req.body;
    try {

        fechaPago = moment().format(`YYYY-MM-DD`)
        let year= moment().format(`YYYY`)    
        let matriculaCheck = await matricula.findOne({where:{idAcudiente,fechaPago:{[Op.between]:[moment().format(`YYYY-MM-01`),moment().format(`YYYY-MM-31`)],}}})
        if (matriculaCheck) {
            return res.json({
                status: false,
                mensaje: 'Matricula pagada anteriormente',
            })
        }else{
        const data = await matricula.create({monto,metodoPago,fechaPago,jornada,idAcudiente})
        let vuelta=0
        let index;
        //Tipo de calendario
        for (index = 9; vuelta < meses; index++) {
            vuelta++
            let indexForm = index.toString().padStart(2, '0')
            const mes = await pensiones.create({fechaPago:moment().format(`${year}-${indexForm}-05`),valor:valMes,mora:false,estatus:'Pendiente',idAcudiente,idPension})
            if (index==12) {
                index = 0
                year++
            }
        }
        if (data) {
            res.json({
                status: true,
                mensaje: 'Matricula pagada',
            })
        }else{
            res.json({
                status: false,
                mensaje: 'Error al pagar',
            })
        }
    }


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
matriculaCtrl.getPago = async (req, res) => {
    try {
        let {idAcudiente} = req.body;
        let matriculaRes = await matricula.findOne({
            where: { 
                idAcudiente,
                fechaPago:{[Op.between]:[moment().format(`YYYY-01-01`),moment().format(`YYYY-12-31`)],}
            } 
        })
        if (matriculaRes) {
            res.json({
                resp: true
            })
        }else{
            res.json({
                resp: false
            })

        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= matriculaCtrl