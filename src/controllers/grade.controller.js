const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const GradeModel = require('../models/grade.model')
const GradeCtrl = {};

GradeCtrl.consultarGrados = async(req,res)=>{
    try {
        const result = await GradeModel.findAll({ include: [{ association: 'gradeAsUser' },{association: 'gradeAsPeriod'}]});
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

GradeCtrl.consultarGrado = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await GradeModel.findOne({ where: { id: id },include: [{ association: 'gradeAsUser' },{association: 'gradeAsPeriod'}] });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

GradeCtrl.crearGrado = async(req,res)=>{
    const {price,description,idUser,idPeriod}= req.body 
    const result = await GradeModel.findOne({ where: { description: description} });
    if(result) {
        res.json({
            mensaje: 'la inscripción ya existe'
        })
    }
    else if(description==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await GradeModel.create({price,description,idUser,idPeriod})
        res.json({
            mensaje: 'Grado creada',
        })
    }
}

GradeCtrl.actualizarGrado = async (req, res) => {
    try {
        const { id } = req.params;
        let {price,description,idUser,idPeriod} = req.body;
        if (id === undefined || Grado === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        password = await bcrypt.hash(password,10)
        console.log(password)
        await GradeModel.update({price,description,idUser,idPeriod},{
            where: {
                id: id
            }
        })
        const user = await GradeModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Inscripción no encontrada',
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




module.exports= GradeCtrl