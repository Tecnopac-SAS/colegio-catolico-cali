const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const padreFamiliaModel = require('../models/padreFamilia.model')
const acudienteModel = require('../models/acudiente.model')
const responsableModel = require('../models/responsableFacturacion.model')
const padreFamiliaCtrl = {};

padreFamiliaCtrl.consultarPadreFamilia = async(req,res)=>{
    try {
        //const result = await padreFamiliaModel.findAll();
        const result = await padreFamiliaModel.findAll({ include: { association: 'padreFamiliaAsEstudiante' }});
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

padreFamiliaCtrl.consultarPadreFamiliaCriterio = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await padreFamiliaModel.findAll({ where: { description:{[Op.like]:`${description}%`}},include: { association: 'padreFamiliaAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

padreFamiliaCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await padreFamiliaModel.findOne({ where: { id: id },include: { association: 'padreFamiliaAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

padreFamiliaCtrl.crearPadreFamilia = async(req,res)=>{
    const {estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante}= req.body 
    if(estado==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await padreFamiliaModel.create({estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante})
        res.json({
            mensaje: 'Padre de familia creado',
        })
    }

}

padreFamiliaCtrl.crearMadreFamilia = async(req,res)=>{
    const {estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante}= req.body 
    if(estado==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await padreFamiliaModel.create({estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante})
        res.json({
            mensaje: 'Madre de familia creado',
        })
    }

}

padreFamiliaCtrl.crearAcudiente = async(req,res)=>{
    const {vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante}= req.body 
    if(vive==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await acudienteModel.create({vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular,idEstudiante})
        res.json({
            mensaje: 'Acudiente  creado',
        })
    }

}



padreFamiliaCtrl.crearResponsable = async(req,res)=>{
    const {tipoPersona,razonSocial,tipoDocumento,identificacion,direccion,pais,departamento,ciudad,correoElectronico,celular,idEstudiante}= req.body 
    if(tipoDocumento==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await responsableModel.create({tipoPersona,razonSocial,tipoDocumento,identificacion,direccion,pais,departamento,ciudad,correoElectronico,celular,idEstudiante})
        res.json({
            mensaje: 'Responsable creado',
        })
    }

}




padreFamiliaCtrl.actualizarPadreFamilia = async (req, res) => {
    try {
        const { id } = req.params;
        const {estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular} = req.body;
        if (id === undefined || deporteGusto === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        await padreFamiliaModel.update({estado,vive,tipoDocumento,identificacion,nombres,apellidos,profesion,dondeTrabaja,cargo,ingresoMensual,correoElectronico,direccion,telefono,celular},{
            where: {
                id: id
            }
        })
        const user = await padreFamiliaModel.findOne({ where: { id: id } });
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


padreFamiliaCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await padreFamiliaModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await padreFamiliaModel.findOne({ where: { id: id } });
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


module.exports= padreFamiliaCtrl