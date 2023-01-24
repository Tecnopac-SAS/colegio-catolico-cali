const acudienteModel = require('../models/acudiente.model')
const acudienteCtrl = {};



acudienteCtrl.actualizarBolsillo = async (req, res) => {
    try {
        let {idAcudiente,cant} = req.body;
        if (idAcudiente === undefined || cant === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        acudiente1 = await acudienteModel.findOne({
            where: {
                id: idAcudiente
            }
        })
        acudiente = await acudienteModel.update({bolsillo:cant+acudiente1.bolsillo},{
            where: {
                id: idAcudiente
            }
        })
        
        res.json({
            mensaje: 'ok'
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
acudienteCtrl.getBolsillo = async (req, res) => {
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

module.exports= acudienteCtrl