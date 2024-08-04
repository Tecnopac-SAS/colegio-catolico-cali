const acudienteModel = require('../models/acudiente.model')
const {validationResult} = require("express-validator");
const acudienteCtrl = {};


acudienteCtrl.getAcudiente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        let {idAcudiente} = req.body;
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

acudienteCtrl.getAcudientebyEstudiante = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        let {idEstudiante} = req.body;
        const result = await acudienteModel.findAll({
            where: {
                idEstudiante: idEstudiante
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        let {idAcudiente, cant} = req.body;
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
acudienteCtrl.actualizarAcudiente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const { idAcudiente, nombres, apellidos, cargo, celular, correoElectronico, direccion, dondeTrabaja, identificacion, ingresoMensual, parentesco, profesion, telefono, tipoDocumento } = req.body;

        const acudienteExistente = await acudienteModel.findOne({
            where: {
                id: idAcudiente
            }
        });

        if (!acudienteExistente) {
            console.error('Acudiente no encontrado.');
            return res.status(404).json({ message: "Acudiente not found." });
        }

        await acudienteModel.update({ nombres, apellidos, cargo, celular, correoElectronico, direccion, dondeTrabaja, identificacion, ingresoMensual, parentesco, profesion, telefono, tipoDocumento }, {
            where: {
                id: idAcudiente
            }
        });

        res.json({
            mensaje: 'Acudiente updated successfully.'
        });
    } catch (error) {
        console.error('Error al actualizar el acudiente:', error);
        res.status(500).json({ message: error.message });
    }
};

acudienteCtrl.getBolsillo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        let {idAcudiente} = req.body;
        acudiente = await acudienteModel.findOne({ where: { id: idAcudiente } })
        res.status(200).json({
            resp: acudiente.bolsillo
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
acudienteCtrl.actualizarLonchera = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        let {idAcudiente} = req.body;
        acudiente = await acudienteModel.findOne({ where: { id: idAcudiente } })
        
        res.json({
            resp: acudiente.lonchera
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


acudienteCtrl.descuentoBolsillo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const {idAcudiente, cant} = req.body;
        if (idAcudiente === undefined || cant === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const acudiente1 = await acudienteModel.findOne({
            where: {
                id: idAcudiente
            }
        })
        let newBolsillo = (acudiente1.bolsillo)-cant;
        const data = await acudienteModel.update({bolsillo: newBolsillo},{
            where: {
                id: idAcudiente
            }
        })
        if(data){
            res.json({
                mensaje: `Descuento realizado! ${newBolsillo}`
            })
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= acudienteCtrl