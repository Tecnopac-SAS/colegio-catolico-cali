const matricula = require('../models/matriculasPagos.model')
const pensiones = require('../models/pensionMeses.model')
const moment = require('moment');
const { json } = require('body-parser');
const matriculaCtrl = {};
const sequelize = require('sequelize');



matriculaCtrl.crearPago = async (req, res) => {
    try {
        let {monto,metodoPago,idAcudiente,valMes,meses} = req.body;
        // return  res.json(req.body)
        fechaPago = moment().format(`YYYY-MM-DD`)
        let year= moment().format(`YYYY`)
        const data = await matricula.create({monto,metodoPago,fechaPago,idAcudiente})
        
        let vuelta=0
        for (let index = 06; vuelta < meses; index++) {
            vuelta++
            let indexForm = index.toString().padStart(2, '0')
            const mes = await pensiones.create({fechaPago:moment().format(`${year}-${indexForm}-01`),valor:valMes,mora:'No',estatus:'Pendiente',idAcudiente})
            if (index==12) {
                index=00
                year++
            }
        }
        if (data) {
            res.json({
                mensaje: 'Matricula pagada',
            })
        }else{
            res.json({
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
        const {Op} = sequelize;
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