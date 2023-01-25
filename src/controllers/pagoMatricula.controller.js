const matricula = require('../models/matriculasPagos.model')
const pensiones = require('../models/pensionMeses.model')
const moment = require('moment')
const matriculaCtrl = {};



matriculaCtrl.crearPago = async (req, res) => {
    try {
        let {monto,metodoPago,idAcudiente,valMes,meses} = req.body;
        // return  res.json(req.body)
        fechaPago = new Date()
        const data = await matricula.create({monto,metodoPago,fechaPago,idAcudiente})
        
        let vuelta=0
        for (let index = 06; vuelta < meses; index++) {
            vuelta++
            let indexForm = index.toString().padStart(2, '0')
            const mes = await pensiones.create({fechaPago:moment().format(`YYYY-${indexForm}-01 h:mm:ss`),valor:valMes,mora:'No',estatus:'Pendiente',idAcudiente})
            if (index==12) {
                index=00
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
        matriculaRes = await matricula.findOne({ where: { idAcudiente} })
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