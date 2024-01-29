const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const multer  = require('multer')
const md5 = require('md5')
const path = require('path');
const Acudiente = require('../models/acudiente.model');
const extracurricularModel = require('../models/extracurricular.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const technicalInscription = require('../models/technicalInscription.model')
const extracurricularCtrl = {};

extracurricularCtrl.consultarExtracurriculares = async(req,res)=>{
    try {
        //const result = await extracurricularModel.findAll();
        const result = await extracurricularModel.findAll({ include: { association: 'extracurricularAsTeacher' }});
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
        const result = await extracurricularModel.findAll({ where: { description:{[Op.like]:`${description}%`}},include: { association: 'extracurricularAsTeacher' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

extracurricularCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await extracurricularModel.findOne({ where: { id: id },include: { association: 'extracurricularAsTeacher' }});
        
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
        let path_img = 'src/uploads';
        res.status(200).sendFile(path.resolve(path_img));
    }

}

extracurricularCtrl.crearExtracurricular = async(req,res)=>{
    const {activity,startDate,finalDate,price,information,schedule,idTeacher,imagen}= req.body 
    if(activity==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {

        // const imagenCargada = name[7];
        await extracurricularModel.create({imagen:imagen,activity,startDate,finalDate,price,information,schedule,idTeacher})
        res.json({
            mensaje: 'Extracurricular  creado',
        })
    }

}

extracurricularCtrl.actualizarExtracurricular = async (req, res) => {
    try {
        const { id } = req.params;
        const {activity,startDate,finalDate,idTeacher,information,schedule} = req.body;
        if (id === undefined || activity === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        // const imagen_path = req.file.path;
        // const name = imagen_path.split('\\');
        // const imagenCargada = name[7];
        await extracurricularModel.update({activity,startDate,finalDate,idTeacher,information,schedule},{
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

extracurricularCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await extracurricularModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await extracurricularModel.findOne({ where: { id: id } });
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
extracurricularCtrl.desvincularse = async (req, res) => {
    try {
        const { id } = req.params;
        const { idEstudiante, idExtracurricular } = req.body;
        const delet = await extracurricularInscriptionModel.update({isActive: 0},{
            where: {
                id: id,
                idExtracurricular: idExtracurricular,
                idEstudiante: idEstudiante
            }
        })
         if(delet){
            return res.json({
                mensaje: 'desvinculado',
            })
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

extracurricularCtrl.misExtracurriculares = async(req,res)=>{
    const {idEstudiante}= req.body 

    const inscripcion = await extracurricularInscriptionModel.findAll({ where: { idEstudiante: idEstudiante, isActive: 1 }, include: { association: 'extracurricularInscriptionAsExtracurricular',include:{association:'extracurricularAsTeacher'} } })

    if(inscripcion !== null){
        res.json({
            result: inscripcion,
            status:true
        })
    }else{
        res.json({
            status:false
        })
    }

}
extracurricularCtrl.pago = async(req,res)=>{
    const {monto,idExtracurricular,metodoPago,idEstudiante,idAcudiente,isActive}= req.body 

     if(idExtracurricular==null){
        res.json({
            mensaje: 'No tienes extracurricular asignado',
            status:false
        })
    }
    else {
        const inscripcion = await extracurricularInscriptionModel.findOne({ where: { idExtracurricular: idExtracurricular, isActive: isActive }, include: { association: 'extracurricularInscriptionAsExtracurricular' } })
        // const search = await courseModel.findOne({ where: { id: idExtracurricular } })
        if(inscripcion === null){
            const datos = await extracurricularInscriptionModel.create({monto,idExtracurricular,metodoPago,idEstudiante,isActive})
            if (datos) {
                if (metodoPago == 'bolsillo') {
                    let acudienteM = await Acudiente.findOne({where:{id:idAcudiente}})
                    let nuevoBolsillo = acudienteM.bolsillo - monto
                    await acudiente.update({bolsillo:nuevoBolsillo},{where:{id:idAcudiente}})
                }
                res.json({
                    mensaje: 'Extracurricular registrado',
                    status:true
                })
            }else{
                res.json({
                    mensaje: 'No se pudo registrar el extracurricular',
                    status:false
                })
            }
        }else{
            if (inscripcion.extracurricularInscriptionAsExtracurricular.finalDate > new Date()) {
                res.json({
                    mensaje: 'Extracurricular ya pagada anteriormente',
                    status:false
                })
            }else{
                const datos = await technicalInscription.create({monto,idExtracurricular,metodoPago,idEstudiante,isActive})
                res.json({
                    mensaje: 'Extracurricular registrado',
                    status:true
                })

            }
        }
    }

   
}

module.exports= extracurricularCtrl