const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const studentDatabaseModel = require('../models/studentDatabase.model')
const studentDatabaseCtrl = {};

studentDatabaseCtrl.consultarStudentDatabases = async(req,res)=>{
    try {
        const result = await studentDatabaseModel.findAll();
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

studentDatabaseCtrl.consultarStudentDatabase = async (req, res) => {
    try {
        const { nombres,tipo } = req.params;
        const result = await studentDatabaseModel.findAll({ where: { nombres:{[Op.like]:`${nombres}%`}, tipo: tipo}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.consultarStudentEstados = async (req, res) => {
    try {
        const { tipo } = req.params;
        const result = await studentDatabaseModel.findAll({ where: { tipo:{[Op.like]:`${tipo}%`}} });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await studentDatabaseModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

studentDatabaseCtrl.crearStudentDatabase = async(req,res)=>{
    const {
    codigo,
    nombres,
    apellidos,
    tipoDocumento,
    identificacion,
    expedicion,
    lugarNacimiento,
    fechaNacimiento,
    edad,
    direccion,
    tipoDireccion,
    barrio,
    estrato,
    telefono,
    correo,
    tipoCupo,
    tipo
    }= req.body 

     if(routeName==null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
       
        const data = await studentDatabaseModel.create({
            codigo,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
            tipo
        })
        res.json({
            mensaje: 'Curso creado',
        })
    }

}

studentDatabaseCtrl.actualizarStudentDatabase = async (req, res) => {
    try {
        const { id } = req.params;
        let {
            codigo,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
            tipo
        } = req.body;
        if (id === undefined || nombres === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await studentDatabaseModel.update({
            codigo,
            nombres,
            apellidos,
            tipoDocumento,
            identificacion,
            expedicion,
            lugarNacimiento,
            fechaNacimiento,
            edad,
            direccion,
            tipoDireccion,
            barrio,
            estrato,
            telefono,
            correo,
            tipoCupo,
            tipo
        },{
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'estudiante no encontrado',
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

studentDatabaseCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await studentDatabaseModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({ where: { id: id } });
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

studentDatabaseCtrl.cambiarEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { tipo } = req.body;
        if (tipo === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await studentDatabaseModel.update({tipo},{
            where: {
                id: id
            }
        })
        const user = await studentDatabaseModel.findOne({ where: { id: id } });
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

studentDatabaseCtrl.studentDatabaseCount = async (req, res) => {
    try {
        const { tipo } = req.params;
        const result = await bdSq.query("SELECT COUNT(*) as contador FROM studentdatabases where studentdatabases.tipo=:parametro ",{replacements:{parametro:`${tipo}`},type: QueryTypes.SELECT});
        if (!result) {
            return res.json({

                result: 'No hay datos',
            })
        }
        else {
            res.json({
                result
            })
            }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= studentDatabaseCtrl