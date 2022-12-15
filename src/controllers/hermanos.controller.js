const config = require('../../config')
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq')
const hermanoModel = require('../models/hermanos.model')
const hermanoCtrl = {};

hermanoCtrl.consultarHermano = async(req,res)=>{
    try {
        //const result = await hermanoModel.findAll();
        const result = await hermanoModel.findAll({ include: { association: 'hermanoAsEstudiante' }});
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

hermanoCtrl.consultarHermanoCriterio = async (req, res) => {
    try {
        const { description } = req.params;
        const result = await hermanoModel.findAll({ where: { description:{[Op.like]:`${description}%`}},include: { association: 'hermanoAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

hermanoCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await hermanoModel.findOne({ where: { id: id },include: { association: 'hermanoAsEstudiante' }});
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

hermanoCtrl.crearHermano = async(req,res)=>{
    const {nombres,apellidos,nivelEstudio,institucion}= req.body 
    if(nombres==""){
        res.json({
            mensaje: 'Los campos deben estar diligenciados en su totalidad'
        })
    }
    else {
        await hermanoModel.create({nombres,apellidos,nivelEstudio,institucion,})
        res.json({
            mensaje: 'Hermano creado',
        })
    }

}



hermanoCtrl.crearHermanos = async(req,res)=>{

    try {

        let data = req.body;
               let {nombres}= req.body 
               let detalles = data;
               detalles.forEach( async element => {
                console.log("data")
                console.log(data)
                console.log(nombres)
                console.log(element)
          
                
            const result =  await hermanoModel.create({ nombres :element.nombres})
                res.json({
                    mensaje: 'ok',
                    result
                })
            });
     
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
               
              
                // await hermanoModel.create(({nombres})=>{
                //     console.log("hola")
                //     console.log(nombres)
                //     if(nombres){
                     
                //         res.json({
                //                 mensaje: 'Venta realizada'
                //         })
                          
                           
                      
                //     }else{
                //         res.json({
                //             mensaje: 'no'
                //     })
                       
                //     }
                //     res.json({
                //         respuesta: nombres
                // })
                // });
             
          

     

  

}

hermanoCtrl.crearHermanos2 = async(req,res)=>{
    let data = req.body;
    let {nombres}= req.body 
    let detalles = data.detalles;
    detalles.forEach(async (element) => {
    nombres = element.nombres;})

    await hermanoModel.create(({nombres})=>{
       
           
          
        
    });


    


}

hermanoCtrl.actualizarhermano = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombres,apellidos,nivelEstudio,institucion} = req.body;
        if (id === undefined || deporteGusto === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        await hermanoModel.update({nombres,apellidos,nivelEstudio,institucion},{
            where: {
                id: id
            }
        })
        const user = await hermanoModel.findOne({ where: { id: id } });
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

hermanoCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await hermanoModel.update({isActive},{
            where: {
                id: id
            }
        })
        const user = await hermanoModel.findOne({ where: { id: id } });
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


module.exports= hermanoCtrl