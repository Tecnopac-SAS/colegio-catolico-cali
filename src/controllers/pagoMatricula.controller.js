const matricula = require('../models/matriculasPagos.model')
const pensiones = require('../models/pensionMeses.model')
const matriculaCtrl = {};



matriculaCtrl.crearPago = async (req, res) => {
    try {
        let {monto,metodoPago,idAcudiente,valMes,meses} = req.body;
        // return  res.json(req.body)
        fechaPago = new Date()
        const data = await matricula.create({monto,metodoPago,fechaPago,idAcudiente})
        let mesesArr = {01:'Enero',02:'Febrero',03:'Marzo',04:'Abril',05:'Mayo',06:'Junio',07:'Julio',08:'Agosto',09:'Septiembre',10:'Octubre',11:'Noviembre',12:'Diciembre'}
        let vuelta=0
        for (let index = 05; vuelta < meses; index++) {
            vuelta++
            let indexForm = index.toString().padStart(2, '0')
            const mes = await pensiones.create({mes: mesesArr[Number(indexForm)],fechaPago:new Date( `Y-${indexForm}-01`),valor:valMes,mora:'No',estatus:'Pendiente',idAcudiente})
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
        // if (idAcudiente === undefined || cant === undefined) {
        //     res.status(400).json({ message: "Bad Request. Please fill all field." });
        // }
        // acudiente1 = await matricula.findOne({
        //     where: {
        //         id: idAcudiente
        //     }
        // })
        // acudiente = await matricula.update({bolsillo:cant+acudiente1.bolsillo},{
        //     where: {
        //         id: idAcudiente
        //     }
        // })
        
        // res.json({
        //     mensaje: 'ok'
        // })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
matriculaCtrl.getBolsillo = async (req, res) => {
    try {
        let {idAcudiente} = req.body;
        if (idAcudiente === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        acudiente = await acudienteModel.findOne({ where: { id: idAcudiente } })
        
        res.json({
            resp: acudiente.bolsillo
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= matriculaCtrl