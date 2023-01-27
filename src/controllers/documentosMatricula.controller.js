const documentosMatriculaCtrl = {};
const path = require('path');
const { Op } = require('sequelize');
const RandomHelper = require('../helpers/random');

const documentosMatriculaModel = require('../models/documentosMatricula.model');
const EstudianteModel = require('../models/studentDatabase.model');

documentosMatriculaCtrl.create = async (req, res) => {
    const {
        title,
        canViewType,
        canViewValue,
    } = req.body
    const { document } = req.files;

    if (title && canViewType) {
        if (canViewType != 'all' && !canViewValue) {
        } else {
            const fileName = RandomHelper.makeUniq(15) + path.extname(document.name);
            const pathImg = path.join(__dirname, '../') + `/uploads/${fileName}`;
            document.mv(pathImg);

            const documentoMatricula = await documentosMatriculaModel.create({
                title,
                canViewType,
                canViewValue,
                documentUrl: `/${fileName}`
            });
            return res.json({
                success: true,
                mensaje: 'documento creado',
                documentoMatricula
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

documentosMatriculaCtrl.getDocuments = async (req, res) => {
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
                        { canViewType: 'student', canViewValue: student.id }
                    ]
                }
            });
            //Add host to documentUrl
            documentosMatricula.map(documento => {
                return documento.documentUrl = `${process.env.HOST}${documento.documentUrl}`;
            })
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
/*
documentosMatriculaCtrl.consultarDocumentosMatriculas = async (req, res) => {
    try {
        const result = await documentosMatriculaModel.findAll();
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

documentosMatriculaCtrl.consultarDocumentosMatricula = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await documentosMatriculaModel.findAll({ where: { name: { [Op.like]: `${name}%` } } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
documentosMatriculaCtrl.consultarId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await documentosMatriculaModel.findOne({ where: { id: id } });
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



documentosMatriculaCtrl.actualizarDocumentosMatricula = async (req, res) => {
    try {
        const { id } = req.params;
        let { name, apply, grade, file } = req.body;
        if (id === undefined || name === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await documentosMatriculaModel.update({ name, apply, grade, file }, {
            where: {
                id: id
            }
        })
        const user = await documentosMatriculaModel.findOne({ where: { id: id } });
        if (user === null) {
            return res.json({
                mensaje: 'certificado no encontrado',
            })
        }
        else {
            res.json({
                mensaje: 'ok',
                result: user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

documentosMatriculaCtrl.deshabilitar = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        if (isActive === null) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        await documentosMatriculaModel.update({ isActive }, {
            where: {
                id: id
            }
        })
        const user = await documentosMatriculaModel.findOne({ where: { id: id } });
        if (user === null) {
            return res.json({
                mensaje: 'usuario no encontrado',
            })
        }
        else {
            res.json({
                mensaje: 'ok',
                result: user
            })
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

*/
module.exports = documentosMatriculaCtrl