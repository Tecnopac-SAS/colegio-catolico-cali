const {sequelize,Op} = require('sequelize');
const cafeteriaPagos = require('../models/cafeteriaPagos.model')
const acudiente = require('../models/acudiente.model')
const moment = require('moment');
const cafeteriaPagosCtrl = {};

cafeteriaPagosCtrl.crearPago = async(req,res)=>{
    const {data, idAcudiente, idEstudiante}= req.body 
    let crearPago = await cafeteriaPagos.create({
        price:data.cant,
        cantMenu:data.cantMenu,
        productMenu:data.productMenu,
        metodoPago:data.metodoPago,
        mesPago:data.mesPago,
        idEstudiante:idEstudiante,
    })
    if (crearPago) {
        res.status(200).json({
            status:true,
            message:'Pago realizado con exito'
        })
    }else{
        res.status(400).json({
            status:false,
            message:'Error al realizar el pago'
        })
    }
}
cafeteriaPagosCtrl.getPagos = async(req,res)=>{
    let getPagos = await cafeteriaPagos.findAll({
        where:{
            createdAt: {[Op.between]:[new Date(moment().format(`YYYY-MM-01 00:00:00`)),new Date(moment().format(`YYYY-MM-31 23:59:59`))]}
        },
        include: {association: 'cafeteriaPagosAsEstudiante'}
    })
    if (getPagos) {
        res.status(200).json({
            status:true,
            message:'Pagos obtenidos con exito',
            data:getPagos
        })
    }else{
        res.status(400).json({
            status:false,
            message:'Error al obtener los pagos'
        })
    }
}
// cafeteriaPagosCtrl.getPagos = async(req,res)=>{
//     const {idAcudiente}= req.body
//     let getPagos = await cafeteriaPagos.findAll({
//         where:{
//             idAcudiente:idAcudiente
//         }
//     })
//     if (getPagos) {
//         res.status(200).json({
//             status:true,
//             message:'Pagos obtenidos con exito',
//             data:getPagos
//         })
//     }else{
//         res.status(400).json({
//             status:false,
//             message:'Error al obtener los pagos'
//         })
//     }
// }
cafeteriaPagosCtrl.listPagoSearch = async (req, res) => {
    try {
        let { dato } = req.params;
        dato=decodeURIComponent(dato)
        
        let tabla=[]
        let results = [];
        result = await cafeteriaPagos.findAll({
            where:{
                createdAt: {[Op.between]:[new Date(moment().format(`YYYY-MM-01 00:00:00`)),new Date(moment().format(`YYYY-MM-31 23:59:59`))]}
            },
            include: {association: 'cafeteriaPagosAsEstudiante'}
        });
        result.forEach(element => {
            tabla.push({
                codigo:element.cafeteriaPagosAsEstudiante.codigo,
                nombre:element.cafeteriaPagosAsEstudiante.nombres + ' ' + element.cafeteriaPagosAsEstudiante.apellidos,
                fecha:moment(element.createdAt).format('DD/MM/YYYY'),
                productMenu:element.productMenu,
                cantMenu:element.cantMenu,
                id:element.id,
                nombres:element.cafeteriaPagosAsEstudiante.nombres,
                apellidos:element.cafeteriaPagosAsEstudiante.apellidos,
                isActive:element.isActive
            })
        });

        // for(var i=0; i<tabla.length; i++) {
        //     for(key in tabla[i]) {
        //         if (key!='nombres' && key!='apellidos') {
        //             if(tabla[i][key].indexOf(dato)!=-1) {
        //                 results.push({
        //                     cafeteriaPagosAsEstudiante:{
        //                         codigo:tabla[i].codigo,
        //                         nombres:tabla[i].nombres,
        //                         apellidos:tabla[i].apellidos
        //                     },
        //                 });
        //             }
        //         }
        //     }
        // }
        for(var i=0; i<tabla.length; i++) {
            for(key in tabla[i]) {
                if (key!='nombres' && key!='apellidos' && key!='id' && key!='isActive') {
                    if(String(tabla[i][key]).toUpperCase().indexOf(dato.toUpperCase())!=-1) {
                        results.push({
                            cafeteriaPagosAsEstudiante:{
                                codigo:tabla[i].codigo,
                                nombres:tabla[i].nombres,
                                apellidos:tabla[i].apellidos
                            },
                            id:tabla[i].id,
                            fecha:tabla[i].fecha,
                            productMenu:tabla[i].productMenu,
                            cantMenu:tabla[i].cantMenu,
                            isActive:tabla[i].isActive
                        });
                        break;
                    }
                }
            }
        }
        res.json({
            status: 200,
            mensaje: 'ok',
            data:results
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
cafeteriaPagosCtrl.entregarTarjeta = async(req,res)=>{
    const {id}= req.params
    
    let entregarTarjeta = await cafeteriaPagos.update({isActive:false},{where:{id:id}})
    if (entregarTarjeta) {
        res.json({
            status:true,
            message:'Tarjeta entregada con exito'
        })
    }else{
        res.json({
            status:false,
            message:'Error al entregar la tarjeta'
        })
    }
}

module.exports= cafeteriaPagosCtrl