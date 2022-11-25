const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const tuitionModel = require('../models/tuition.model')
const inscriptionModel = require('../models/inscription.model')
const tuitionCtrl = {};

tuitionCtrl.consultarTuitions = async(req,res)=>{
    try {
        //const result = await tuitionModel.findAll({ include: [{ association: 'tuitionAsTuitionType' }]});
        const result = await bdSq.query("SELECT grades.description AS grade,grades.id as idGrade,tuitiontypes.description,tuitiontypes.isActive as isActive,tuitiontypes.price,tuitiontypes.startDate,tuitiontypes.finalDate,tuitiontypes.surcharge,tuitiontypes.id FROM tuitions INNER JOIN tuitiontypes ON tuitions.idTuition = tuitiontypes.id INNER JOIN grades ON tuitiontypes.idGrade = grades.id", { type: QueryTypes.SELECT });
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

tuitionCtrl.consultarTuition = async(req,res)=>{
    try {
        const { description } = req.params;
        const result = await bdSq.query("SELECT grades.description AS grade,grades.id as idGrade,tuitiontypes.description,tuitiontypes.isActive as isActive,tuitiontypes.price,tuitiontypes.startDate,tuitiontypes.finalDate,tuitiontypes.surcharge,tuitiontypes.id FROM tuitions INNER JOIN tuitiontypes ON tuitions.idTuition = tuitiontypes.id INNER JOIN grades ON tuitiontypes.idGrade = grades.id where  tuitiontypes.description LIKE :parametro",{replacements:{parametro:`${description}%`},type: QueryTypes.SELECT});
        res.json({
            status: 200,
            mensaje: 'ok',
            result
        })
    
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

tuitionCtrl.crearTuition = async(req,res)=>{
    const {tuition}= req.body 
    const result = await tuitionModel.findOne({ where: { tuition: tuition} });
    if(result) {
        res.json({
            mensaje: 'El rol ya existe'
        })
    }
    else if(tuition==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
    
        await tuitionModel.create({tuition})
        res.json({
            mensaje: 'Rol creado',
            id: email,
            token,
            password:password
        })
    }
}

module.exports= tuitionCtrl