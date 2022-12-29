const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const aptitudesModel = require('../models/aptitudesEstadoFisico.model')
const aptitudesCtrl = {};

aptitudesCtrl.consultarAptitudes = async(req,res)=>{
    try {
        //const result = await aptitudesModel.findAll();
        const result = await aptitudesModel.findAll({ include: { association: 'aptitudesAsEstudiante' }});
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

aptitudesCtrl.consultarAptitudesCriterio = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await aptitudesModel.findAll({ where: { description:{[Op.like]:`${description}%`}},include: { association: 'aptitudesAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

aptitudesCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await aptitudesModel.findOne({ where: { id: id },include: { association: 'aptitudesAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


aptitudesCtrl.crearAptitudes = async(req,res)=>{
    const {deporteGusto,arteGusto,distincionDeporte,distincionArtistica,pasatiempos,coleccion,estadoSalud,enfermedades,medicamentos,limitacionEducacionFisica,tipoSangre,idEstudiante}= req.body 
    if(deporteGusto==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await aptitudesModel.create({deporteGusto,arteGusto,distincionDeporte,distincionArtistica,pasatiempos,coleccion,estadoSalud,enfermedades,medicamentos,limitacionEducacionFisica,tipoSangre,idEstudiante})
        res.json({
            mensaje: 'Aptitud creada',
        })
    }

}



aptitudesCtrl.actualizarAptitudes = async (req, res) => {
    try {
        const { id } = req.params;
        const {deporteGusto,arteGusto,distincionDeporte,distincionArtistica,pasatiempos,coleccion,estadoSalud,enfermedades,medicamentos,limitacionEducacionFisica,tipoSangre} = req.body;
        if (id === undefined || deporteGusto === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        await aptitudesModel.update({deporteGusto,arteGusto,distincionDeporte,distincionArtistica,pasatiempos,coleccion,estadoSalud,enfermedades,medicamentos,limitacionEducacionFisica,tipoSangre},{
            where: {
                id: id
            }
        })
        const user = await aptitudesModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'historial Academico no encontrado',
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

aptitudesCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await aptitudesModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await aptitudesModel.findOne({ where: { id: id } });
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


module.exports= aptitudesCtrl