const documentosMatriculaCtrl = {};
const { Op } = require('sequelize');


const documentosMatriculaModel = require('../models/documentosMatricula.model');
const EstudianteModel = require('../models/studentDatabase.model');
const {validationResult} = require("express-validator");


documentosMatriculaCtrl.create = async (req, res) => {
    const {
        title,
        canViewType,
        canViewValue,
        documentoid,
    } = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }


    if (title && canViewType) {
        if (canViewType != 'all' && !canViewValue) {
        } else {
            const documentoMatricula = await documentosMatriculaModel.create({
                title,
                canViewType,
                canViewValue,
                documentoid,
            });
            return res.json({
                success: true,
                mensaje: 'documento creado',
                documentoMatricula: {
                    ...documentoMatricula.toJSON(),
                }
            })
        }
    }

    let field = '';
    if (!title) {
        field = 'Titulo';
    } else if (!canViewType) {
        field = 'A quien aplica';
    } else if (!canViewValue) {
        if (canViewType === 'grade') {
            field = 'Grado';
        } else if (canViewType === 'student') {
            field = 'Estudiante';
        }
    }

    return res.json({
        success: false,
        mensaje: `El campo ${field} es requerido`
    })

}

documentosMatriculaCtrl.getDocumentByID = async (req, res) => {
    const { id } = req.params;
    try {
        const documentoMatricula = await documentosMatriculaModel.findOne({ where: { id: id } });
        if (documentoMatricula) {
            return res.json({
                success: true,
                mensaje: 'Documento encontrado',
                result: {
                    ...documentoMatricula.toJSON()
                }
            })
        } else {            
            return res.json({
                success: false,
                mensaje: 'Documento no encontrado'
            })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

}

documentosMatriculaCtrl.getDocuments = async (req, res) => {
    try {
        const documentosMatricula = await documentosMatriculaModel.findAll();
        return res.json(documentosMatricula)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

documentosMatriculaCtrl.getDocumentsByStudent = async (req, res) => {
    const { studentId } = req.params;
    try {
        // Get student
        const student = await EstudianteModel.findOne({ where: { id: studentId } });
        if (student) {
            //Get documents by Grade, code or all
            const documentosMatricula = await documentosMatriculaModel.findAll({
                where: {
                    [Op.and]: [
                        { isActive: true },
                    ],
                    [Op.or]: [
                        { canViewType: 'all' },
                        { canViewType: 'grade', canViewValue: student.idGrade },
                        { canViewType: 'student', canViewValue: student.codigo }
                    ]
                }
            });
            return res.json(documentosMatricula)
        } else {
            return res.json({
                success: false,
                mensaje: 'Estudiante no encontrado'
            })
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

documentosMatriculaCtrl.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const { isActive, title, canViewType, canViewValue, documentoid, canViewTuitionType } = req.body;
    const { id } = req.params;
    try {
        const documentoMatricula = await documentosMatriculaModel.findOne({ where: { id: id } });
        if (documentoMatricula) {
            if (isActive !== undefined) {
                documentoMatricula.isActive = isActive;
            }
            if (title) {
                documentoMatricula.title = title;
            }
            if (canViewType) {
                documentoMatricula.canViewType = canViewType;
            }
            if (canViewValue) {
                if (canViewType === 'all') {
                    documentoMatricula.canViewValue = null;
                } else {
                    documentoMatricula.canViewValue = canViewValue;
                }
            }
            if (documentoid) {
                documentoMatricula.documentoid = documentoid;
            }
            if (canViewTuitionType) {
                documentoMatricula.canViewTuitionType = canViewTuitionType;
            }
            await documentoMatricula.save();
            return res.json({
                success: true,
                mensaje: 'Documento actualizado',
                documentoMatricula: {
                    ...documentoMatricula.toJSON(),
                }
            })
        } else {
            return res.json({
                success: false,
                mensaje: 'Documento no encontrado'
            })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = documentosMatriculaCtrl