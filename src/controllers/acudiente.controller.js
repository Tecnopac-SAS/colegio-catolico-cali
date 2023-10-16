const acudienteModel = require('../models/acudiente.model')
const acudienteCtrl = {};


acudienteCtrl.getAcudiente = async (req, res) => {
    try {
        let {idAcudiente} = req.body;
        if (idAcudiente === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const result = await acudienteModel.findOne({
            where: {
                id: idAcudiente
            }
        })
        
        res.json({
            mensaje: 'ok',
            result: result
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
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
acudienteCtrl.actualizarLonchera = async (req, res) => {
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
        acudiente = await acudienteModel.update({lonchera:cant+acudiente1.lonchera},{
            where: {
                id: idAcudiente
            }
        })
        if (acudiente) {
            res.json({
                mensaje: 'Lonchera actualizada',
                status: true
            })
        }else{
            res.json({
                mensaje: 'Tuvimos un error al ingresar tu saldo',
                status: false
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
acudienteCtrl.getLonchera = async (req, res) => {
    try {
        let {idAcudiente} = req.body;
        if (idAcudiente === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        acudiente = await acudienteModel.findOne({ where: { id: idAcudiente } })
        
        res.json({
            resp: acudiente.lonchera
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= acudienteCtrl