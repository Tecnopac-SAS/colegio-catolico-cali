
const {sequelize, Op, where} = require('sequelize');
const certificatesModel = require('../models/certificates.model')
const certificateInscription = require('../models/certificateInscription.model');
const Acudiente = require('../models/acudiente.model');
const {validationResult} = require("express-validator");

const certificatesCtrl = {};

certificatesCtrl.consultarCertificates = async(req,res)=>{
    try {
        const result = await certificatesModel.findAll();
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
certificatesCtrl.listarCertificatesAcu = async(req,res)=>{
    try {
        const result = await certificatesModel.findAll({where: {isActive: true}});
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
certificatesCtrl.listCertificatesInscriptionAll = async(req,res)=>{
    try {
        const result = await certificateInscription.findAll({include:{association: 'certificateInscriptionAsCertificate'}});
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
certificatesCtrl.listCertificatesInscription = async(req,res)=>{
    try {
        const result = await certificateInscription.findAll({where: {idEstudiante: req.params.id}, include:{association: 'certificateInscriptionAsCertificate'}});
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

certificatesCtrl.consultarCertificate = async (req, res) => {
    try {
        const { concept } = req.params;
        const result = await certificatesModel.findAll({ where: { concept:{[Op.like]:`${concept}%`}}});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

certificatesCtrl.certificateInscriptionId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await certificateInscription.findOne({ where: { id: id }, include:[{association: 'certificateInscriptionAsEstudiante'}, {association: 'certificateInscriptionAsCertificate'}, {association: 'certificateInscriptionAsGrade'}]});
        let acudiente = await Acudiente.findOne({where: {idEstudiante: result.certificateInscriptionAsEstudiante.id}});
        res.json({
            mensaje: 'ok',
            result:{result , ...acudiente, documentUrl:formatUrl(result.id)}
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
certificatesCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await certificatesModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

certificatesCtrl.crearCertificate = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {concept,time,channel,applicant,price}= req.body 

    try{
        await certificatesModel.create({concept,time,channel,applicant,price})
        res.json({
            mensaje: 'Certificado creado',
        })
    }catch (error){
        res.status(500);
        res.send(error.message);
    }
}

certificatesCtrl.actualizarCertificate = async (req, res) => {
    try {
        const { id } = req.params;
        let {concept,time,channel,applicant,price} = req.body;
        if (id === undefined || concept === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificatesModel.update({concept,time,channel,applicant,price},{
            where: {
                id: id
            }
        })
        const user = await certificatesModel.findOne({ where: { id: id } });
         if(user === null){
            return res.json({
                mensaje: 'certificado no encontrado',
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

certificatesCtrl.actualizarCertificateInscription = async (req, res) => {
    try {
        const { id } = req.params;
        let {documentUrl,status,paid} = req.body;
        if (id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificateInscription.update({documentUrl,status,paid},{
            where: {
                id: id
            }
        })
        res.json({
            mensaje: 'ok'
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

certificatesCtrl.actualizarCertificateInscriptionPaid = async (req, res) => {
    try {
        const { id } = req.params;
        const {paid} = req.body;
        if (id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificateInscription.update({paid: paid},{
            where: {
                id: id
            }
        })
        res.json({
            mensaje: 'ok'
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
certificatesCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await certificatesModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await certificatesModel.findOne({ where: { id: id } });
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

certificatesCtrl.pago = async(req,res)=>{
    const {monto,canalEntrega,detalle,idCertificate,idGrade,metodoPago,idEstudiante,paymentCode,paid}= req.body 

     if(idCertificate==null){
        res.json({
            mensaje: 'No tienes certificado asignado',
            status:false
        })
    }
    else {
        const certificado = await certificateInscription.findOne({ where: { idCertificate: idCertificate, idGrade: idGrade }})

        if(certificado === null){
            const datos = await certificateInscription.create({monto,canalEntrega,detalle,idCertificate,idGrade,metodoPago,idEstudiante,paymentCode,paid})
            if (datos) {
                res.json({
                    mensaje: 'Certificado registrado',
                    status:true
                })
            }else{
                res.json({
                    mensaje: 'No se pudo registrar el certificado',
                    status:false
                })
            }
        }else{
            const datos = await certificateInscription.create({monto,canalEntrega,detalle,idCertificate,idGrade,metodoPago,idEstudiante,paymentCode,paid})
            if(datos){
                res.json({
                    mensaje: 'Certificado registrado',
                    status:true
                })
            }else{
                res.json({
                    mensaje: 'No se pudo registrar el certificado',
                    status:false
                })
            }
        }
    }

   
}

certificatesCtrl.listarInscriptionAllSearch = async (req, res) => {
    try {
        let { dato,id } = req.params;
        dato=decodeURIComponent(dato)
        let results = [];
        let tabla=[]
        result = await certificateInscription.findAll({ where:{ idEstudiante:id}, include:{association: 'certificateInscriptionAsCertificate'}});
        result.forEach(element => {
            tabla.push(element)
        });
        for(var i=0; i<tabla.length; i++) {
            for(key in tabla[i]['certificateInscriptionAsCertificate'].dataValues) {
                if (key !== 'createdAt' && key !== 'updatedAt') {
                    if(String(tabla[i]['certificateInscriptionAsCertificate'][key]).indexOf(dato) !== -1) {
                        results.push(tabla[i]);
                        break;
                    }
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
certificatesCtrl.statusChange = async (req, res) => {
    const { status} = req.body;
    const { id } = req.params;
    try {
        const certificate = await certificateInscription.findOne({ where: { id: id } });
        if (certificate) {
            if (status !== undefined) {
                certificate.status = status;
                await certificate.save();
                res.json({ mensaje: 'ok', result: certificate });
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const formatUrl = (certificateInscriptionId) =>{
    return `${process.env.HOST}/certificate/${certificateInscriptionId}/download`
}

module.exports= certificatesCtrl