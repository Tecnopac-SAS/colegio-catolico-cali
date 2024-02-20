const extracurricularModel = require('../models/extracurricular.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const technicalInscription = require('../models/technicalInscription.model')
const extracurricularCtrl = {};

extracurricularCtrl.consultarExtracurriculares = async(req,res)=>{
    try {
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

extracurricularCtrl.crearExtracurricular = async(req,res)=>{
    const {activity,startDate,finalDate,price,information,schedule,idTeacher,imagen}= req.body 
    if(activity==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {

        await extracurricularModel.create({imagen,activity,startDate,finalDate,price,information,schedule,idTeacher})
        res.json({
            mensaje: 'Extracurricular creado',
        })
    }

}

extracurricularCtrl.actualizarExtracurricular = async (req, res) => {
    try {
        const { id } = req.params;
        const {activity,startDate,finalDate,idTeacher,information,schedule,imagen,price} = req.body;
        if (id === undefined || activity === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await extracurricularModel.update({activity,startDate,finalDate,idTeacher,information,schedule,imagen,price},{
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
        if(inscripcion === null){
            const datos = await extracurricularInscriptionModel.create({monto,idExtracurricular,metodoPago,idEstudiante,isActive})
            if (datos) {
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