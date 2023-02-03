const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const courseModel = require('../models/courses.model')
const coursesInscription = require('../models/coursesInscription.model')
const courseCtrl = {};

courseCtrl.consultarCourses = async(req,res)=>{
    try {
        //const result = await courseModel.findAll();
        const result = await courseModel.findAll({ include: [{ association: 'courseAsTeacher' }]});
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

courseCtrl.consultarCourse = async (req, res) => {
    try {
        const { typeCourse } = req.params;
        const result = await courseModel.findAll({ where: { typeCourse:{[Op.like]:`${typeCourse}%`}}, include: { association: 'courseAsTeacher' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

courseCtrl.consultarAsignature = async (req, res) => {
    try {
        const { asignature } = req.params;
        const result = await courseModel.findAll({ where: { asignature:{[Op.like]:`${asignature}%`}}, include: { association: 'courseAsTeacher' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

courseCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await courseModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

courseCtrl.crearCourse = async(req,res)=>{
    const {asignature,starDate,finalDate,price,idTeacher,typeCourse,starHour,finalHour,description}= req.body 

     if(asignature==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await courseModel.create({asignature,starDate,finalDate,price,idTeacher,typeCourse,starHour,finalHour,description})
        res.json({
            mensaje: 'Curso creado',
        })
    }

   
}

courseCtrl.actualizarCourse = async (req, res) => {
    try {
        const { id } = req.params;
        let {asignature,starDate,finalDate,price,idTeacher,typeCourse,isActive,starHour,finalHour,description} = req.body;
        if (id === undefined || asignature === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await courseModel.update({asignature,starDate,finalDate,price,idTeacher,typeCourse,isActive,starHour,finalHour,description},{
            where: {
                id: id
            }
        })
        const user = await courseModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'curso no encontrado',
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

courseCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await courseModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await courseModel.findOne({ where: { id: id } });
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

courseCtrl.pago = async(req,res)=>{
    const {monto,idCourse,metodoPago,idEstudiante}= req.body 

     if(idCourse==null){
        res.json({
            mensaje: 'No tienes curso asignado',
            status:false
        })
    }
    else {
        const inscripcion = await coursesInscription.findOne({ where: { idCourse: idCourse }, include: { association: 'coursesInscriptionAsCourse' } })
        // const search = await courseModel.findOne({ where: { id: idCourse } })
        if(inscripcion === null){
            const datos = await coursesInscription.create({monto,idCourse,metodoPago,idEstudiante})
            if (datos) {
                res.json({
                    mensaje: 'Curso registrado',
                    status:true
                })
            }else{
                res.json({
                    mensaje: 'No se pudo registrar el curso',
                    status:false
                })
            }
        }else{
            if (inscripcion.coursesInscriptionAsCourse.finalDate > new Date()) {
                res.json({
                    mensaje: 'Curso ya pagado anteriormente',
                    status:false
                })
            }else{
                const datos = await coursesInscription.create({monto,idCourse,metodoPago,idEstudiante})
                res.json({
                    mensaje: 'Curso registrado',
                    status:true
                })

            }
        }
    }

   
}
module.exports= courseCtrl