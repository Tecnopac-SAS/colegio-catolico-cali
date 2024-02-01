const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const coursesInscriptionModel = require('../models/coursesInscription.model')
const extracurricularInscriptionModel = require('../models/extracurricularInscription.model')
const matriculasPagosModel = require('../models/matriculasPagos.model')
const soportesPagosModel = require('../models/soportesPago.model')
const pensionMesesModel = require('../models/pensionMeses.model')
const acudiente = require('../models/acudiente.model')
const moment = require('moment');
const soportePagosCtrl = {};




soportePagosCtrl.crearSoportePago = async(req,res)=>{
    const { paymentCode,idAcudiente,monto,viaPago,tipoPago } = req.body;
    try {
        const fecha = new Date(moment().format(`YYYY-MM-01 00:00:00`));
        const data = soportesPagosModel.create({paymentCode,monto,idAcudiente,viaPago,tipoPago,fecha});
        if(data){
            res.json({
                status: 200,
                mensaje: 'Soporte creado con exito',
                result: {
                    paymentCode: paymentCode
                },
            });
        }else{
            res.json({
                status: 400,
                mensaje: 'Error al crear soporte de pago',
                result: data
            });
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

soportePagosCtrl.listarMisSoportesPagos = async(req,res)=>{
    const { idAcudiente } = req.params;
    try {
        const result = await soportesPagosModel.findAll({ include: [{ association: 'soportesPagosAsEstudiante' }], where: {idAcudiente: idAcudiente}});
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

soportePagosCtrl.listarMisSoportesPagosSearch = async (req, res) => {
    try {
        let { dato,id } = req.params;
        dato=decodeURIComponent(dato)
        acudient = await acudiente.findOne({ where:{ idEstudiante:id}, include: { association: 'acudienteAsEstudiante' }});
        
        let tabla=[]
        let results = [];
        // result = await coursesInscriptionModel.findAll({ 
        //     where:{ idEstudiante:id}, 
        //     where:{[Op.or]:[
        //         {metodoPago:{[Op.like]:`%${dato}%`}},
        //         {createdAt:{[Op.like]:`%${dato}%`}}
        //         ]
        //     }});
        result = await coursesInscriptionModel.findAll({ where:{ idEstudiante:id}});
        result.forEach(element => {
            tabla.push({codigo:acudient.acudienteAsEstudiante.codigo,tipo:'curso',fecha:moment(element.createdAt).format('DD/MM/YYYY'),viaPago:element.metodoPago})
        });
        result = await extracurricularInscriptionModel.findAll({ where:{ idEstudiante:id}});
        result.forEach(element => {
            tabla.push({codigo:acudient.acudienteAsEstudiante.codigo,tipo:'extracurricular',fecha:moment(element.createdAt).format('DD/MM/YYYY'),viaPago:element.metodoPago})
        });

        result = await matriculasPagosModel.findAll({ where:{ idAcudiente:acudient.id}});
        result.forEach(element => {
            tabla.push({codigo:acudient.acudienteAsEstudiante.codigo,tipo:'pago matricula',fecha:moment(element.createdAt).format('DD/MM/YYYY'),viaPago:element.metodoPago})
        });

        result = await pensionMesesModel.findAll({ where:{ idAcudiente:acudient.id,estatus:'Pagado'}});
        result.forEach(element => {
            tabla.push({codigo:acudient.acudienteAsEstudiante.codigo,tipo:'pago pension',fecha:moment(element.updatedAt).format('DD/MM/YYYY'),viaPago:element.metodoPago})
        });

        for(var i=0; i<tabla.length; i++) {
            for(key in tabla[i]) {
                if(String(tabla[i][key]).indexOf(dato)!=-1) {
                    results.push(tabla[i]);
                    break;
                }
            }
        }
        res.json({
            status: 200,
            mensaje: 'ok',
            result:results
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports= soportePagosCtrl