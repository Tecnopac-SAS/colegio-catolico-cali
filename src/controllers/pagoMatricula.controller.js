const matricula = require('../models/matriculasPagos.model')
const pensiones = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const {sequelize, Op} = require('sequelize');
const moment = require('moment');
const { json } = require('body-parser');
const matriculaCtrl = {};



matriculaCtrl.crearPago = async (req, res) => {
    try {
        let {monto,metodoPago,jornada,idAcudiente,valMes,meses,idPension} = req.body;
        fechaPago = moment().format(`YYYY-MM-DD`)
        let year= moment().format(`YYYY`)    
        let matriculaCheck = await matricula.findOne({where:{idAcudiente,fechaPago:{[Op.between]:[moment().format(`YYYY-MM-05`),moment().format(`YYYY-MM-31`)],}}})
        if (matriculaCheck) {
            return res.json({
                status: false,
                mensaje: 'Matricula pagada anteriormente',
            })
        }
        const data = await matricula.create({monto,metodoPago,fechaPago,jornada,idAcudiente})
        if (metodoPago == 'bolsillo') {
            let acudienteM = await acudiente.findOne({where:{id:idAcudiente}})
            let nuevoBolsillo = acudienteM.bolsillo - monto
            await acudiente.update({bolsillo:nuevoBolsillo},{where:{id:idAcudiente}})
        }
        
        let vuelta=0
        let index;
        //Tipo de calendario
        for (index = 9; vuelta < meses; index++) {
            vuelta++
            let indexForm = index.toString().padStart(2, '0')
            const mes = await pensiones.create({fechaPago:moment().format(`${year}-${indexForm}-05`),valor:valMes,mora:false,estatus:'Pendiente',idAcudiente,idPension})
            if (index==12) {
                index=00
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

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
matriculaCtrl.getPago = async (req, res) => {
    try {
        let {idAcudiente} = req.body;
        if (idAcudiente === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        matriculaRes = await matricula.findOne({ 
            where: { 
                idAcudiente,
                fechaPago:{[Op.between]:[moment().format(`YYYY-01-01`),moment().format(`YYYY-12-31`)],}
            } 
        })
        // return res.json({Op})
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