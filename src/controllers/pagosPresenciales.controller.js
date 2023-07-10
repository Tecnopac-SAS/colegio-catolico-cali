const {sequelize, Op, where} = require('sequelize');
const { QueryTypes } = require('sequelize');

const config = require('../../config')
const pagosPresencialesModel = require('../models/pagosPresenciales.model')
const pagosPresencialesCtrl = {};
const moment = require('moment');

pagosPresencialesCtrl.consultarPagosPresenciales = async(req,res)=>{
    try {
        const result = await pagosPresencialesModel.findAll();
        res.json({
            status: 200,
            mensaje: 'ok',
            result: result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
}

pagosPresencialesCtrl.crearPagoPresencial = async(req,res)=>{
    const {servicio,fecha,observacion,estado}= req.body 

     if(servicio == null || fecha == null ||observacion == null ||estado == null){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        const data = await pagosPresencialesModel.create({servicio,fecha,observacion,estado})
        res.json({
            mensaje: 'Pago creado',
        })
    }

}

// pagosPresencialesCtrl.actualizarRole = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { role } = req.body;

//         if (id === undefined || role === undefined) {
//             res.status(400).json({ message: "Bad Request. Please fill all field." });
//         }

//         const param = {role};
//         const connection = await getConnection();
//         const result = await connection.query("UPDATE user SET ? WHERE id = ?", [param, id]);
//         res.json({
//             mensaje: 'ok',
//             result
//         })
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// };

module.exports= pagosPresencialesCtrl