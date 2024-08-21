const pensionModel = require('../models/pension.model')
const {validationResult} = require("express-validator");
const pensionCtrl = {};

pensionCtrl.consultarPensiones = async(req,res)=>{
    try {
        const result = await pensionModel.findAll({ include: { association: 'pensionAsDiscounts' } });
        res.json({
            status: 200,
            mensaje: 'ok',
            result:result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

pensionCtrl.consultarPension = async (req, res) => {
    try {
        const { idGrade } = req.params;
        const result = await pensionModel.findAll({ where: { idGrade:{[Op.like]:`${idGrade}%`}}, include: { association: 'pensionAsDiscounts' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

pensionCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pensionModel.findOne({ where: { id: id }, include: { association: 'pensionAsDiscounts' } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
pensionCtrl.crearPension = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {price, discount,use,idGrade,interes}= req.body

    await pensionModel.create({price,discount,use,idGrade,interes})
        res.json({
            mensaje: 'Pensión creada',
        })
}

pensionCtrl.actualizarPension = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const { id } = req.params;
        let {price,discount,idGrade} = req.body;
        if (id === undefined || discount === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await pensionModel.update({price,discount,idGrade},{
            where: {
                id: id
            }
        })
        const user = await pensionModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Matricula no encontrada',
            })
        }
        else {
            res.json({
                mensaje: 'ok',
                result:user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

pensionCtrl.deshabilitar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await pensionModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await pensionModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'usuario no encontrado',
            })
        }
        else {
            res.json({
                mensaje: 'ok',
                result:user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports= pensionCtrl