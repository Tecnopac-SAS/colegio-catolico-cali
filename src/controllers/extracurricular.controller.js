const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const multer  = require('multer')
const md5 = require('md5')
const path = require('path');
const extracurricularModel = require('../models/extracurricular.model')
const extracurricularCtrl = {};

extracurricularCtrl.consultarExtracurriculares = async(req,res)=>{
    try {
        const result = await extracurricularModel.findAll();
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

extracurricularCtrl.consultarExtracurricular = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await extracurricularModel.findAll({ where: { description:{[Op.like]:`${description}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

extracurricularCtrl.getImage = async (req,res)=>{
    const {img} = req.params;

    if(img!="null"){
        let path_img = 'src/uploads/'+ img;
        res.status(200).sendFile(path.resolve(path_img));

    }

    else{
        //let path_img = 'src/uploads/productos/default.jpg';
        res.status(200).sendFile(path.resolve(path_img));
    }

}

extracurricularCtrl.crearExtracurricular = async(req,res)=>{
    const {activity,startDate,finalDate,price,information,schedule,teacher}= req.body 
    if(activity==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const imagen_path = req.file.path;

        const name = imagen_path.split('\\');
        const imagenCargada = name[7];
        await extracurricularModel.create({imagen:imagenCargada,activity,startDate,finalDate,price,information,schedule,teacher})
        res.json({
            mensaje: 'Extracurricular  creado',
        })
    }

}

extracurricularCtrl.actualizarExtracurricular = async (req, res) => {
    try {
        const { id } = req.params;
        let {activity,startDate,finalDate, isActive,teacher} = req.body;
        if (id === undefined || activity === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await extracurricularModel.update({activity,startDate,finalDate,isActive,teacher},{
            where: {
                id: id
            }
        })
        const user = await extracurricularModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'Extracurricular no encontrado',
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




module.exports= extracurricularCtrl