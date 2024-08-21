const config = require('../../config')
const {sequelize, Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const bdSq = require('../db/databaseSq');
const documentosModel = require('../models/documentos.model')
const documentosCtrl = {};
const puppeteer = require('puppeteer');
const {validationResult} = require("express-validator");


documentosCtrl.crearDocumento = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        let {titulo,template} = req.body;
        await documentosModel.create({titulo: titulo, template: template});
        res.json({
            mensaje: 'ok'
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
documentosCtrl.getDocumentos = async (req, res) => {
    try {
        documentos = await documentosModel.findAll();
        res.json({
            resp: documentos
        })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
documentosCtrl.listarDocumento = async (req, res) => {
    try {
        documento = await documentosModel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({
            resp: documento
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
documentosCtrl.actualizarDocumento = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const { titulo, template} = req.body;
        const { id } = req.params;

        await documentosModel.update({titulo: titulo, template: template},{
            where: {
                id: id
            }
        });
        res.json({
            mensaje: 'El documento de a actualizado'
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
documentosCtrl.crearPDFDocumento = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      //Documentos Matrícula 
      acudiente_nombre,
      estudiante_nombre,
      estudiante_grado,
      valor_matricula_letras,
      valor_matricula,
      tabla_pensiones,
      total_pensiones,
      total_pensiones_letras,
      mensualidad_letras,
      mensualidad,
      //Soportes de Pago
      paymentCode,
      soporte_pago_monto,
      soporte_pago_concepto,
      //Acuerdos de Pago
      consecutivoAcuerdo, 
      nombresEstudiante, 
      apellidosEstudiante, 
      codigoEstudiante, 
      grado, 
      identificacionEstudiante, 
      nombresAcudiente, 
      apellidosAcudiente, 
      identificacionAcudiente, 
      emailAcudiente, 
      direccionAcudiente, 
      valorTotalDeuda, 
      fechaFirmado, 
      description, 
      estado, 
      tabla_cuotas, 
    } = req.body;

    if (id === undefined) {
      return res.status(400).json({ message: "Bad Request. Please fill all fields." });
    }

    const documento = await documentosModel.findOne({
      where: {
        id: id
      }
    });

    if (!documento) {
      return res.status(404).json({ message: "Documento not found." });
    }

    // Inicia el navegador Puppeteer
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] });	
    //const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']})

    // Crea una nueva página
    const page = await browser.newPage();

    // Variables y sus valores para reemplazar en el template
    const variables = {

      //Documentos Matrícula 
      acudiente_nombre: acudiente_nombre || '',
      estudiante_nombre: estudiante_nombre || '',
      fecha_actual: new Date().toISOString().split('T')[0],
      fecha_actual_anio: new Date().getFullYear(),
      fecha_actual_mes: new Date().getMonth() + 1,
      fecha_actual_dia: new Date().getDate(),
      estudiante_grado: estudiante_grado || '',
      valor_matricula_letras: valor_matricula_letras || '',
      valor_matricula: valor_matricula || '',
      tabla_pensiones: tabla_pensiones || '',
      total_pensiones: total_pensiones || '',
      total_pensiones_letras: total_pensiones_letras || '',
      mensualidad: mensualidad || '',
      mensualidad_letras: mensualidad_letras || '',
      //Soportes de Pago
      paymentCode: paymentCode || '',
      soporte_pago_monto: soporte_pago_monto || '',
      soporte_pago_concepto: soporte_pago_concepto || '',
      //Acuerdos de Pago
      consecutivoAcuerdo: consecutivoAcuerdo || '',
      nombresEstudiante: nombresEstudiante || '',
      apellidosEstudiante: apellidosEstudiante || '',
      codigoEstudiante: codigoEstudiante || '',
      grado: grado || '',
      identificacionEstudiante: identificacionEstudiante || '',
      nombresAcudiente: nombresAcudiente || '',
      apellidosAcudiente: apellidosAcudiente || '',
      identificacionAcudiente: identificacionAcudiente || '',
      emailAcudiente: emailAcudiente || '',
      direccionAcudiente: direccionAcudiente || '',
      valorTotalDeuda: valorTotalDeuda || '',
      fechaFirmado: fechaFirmado || '',
      description: description || '',
      estado: estado || '',
      tabla_cuotas: tabla_cuotas || '',
    };

    // Función para reemplazar variables en el HTML
    function remplazarVariables(html, variables) {
      const variableRegex = /{{(.*?)}}/g;
      return html.replace(variableRegex, (_, variable) => {
        return variables[variable] || '';
      });
    }

    // HTML que se convertirá en PDF
    const htmlContent = remplazarVariables(documento.template, variables);

    // Establece el contenido HTML en la página
    await page.setContent(htmlContent);

    // Genera el PDF y obtén los datos del PDF en forma de buffer
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px',
      },
    });

    // Cierra el navegador Puppeteer
    await browser.close();

    // Guarda el PDF en el servidor (ajusta la ruta según tu configuración)
    const pdfPath = `src/uploads/matriculas/${documento.titulo}.pdf`;
    require('fs').writeFileSync(pdfPath, pdfBuffer);

    // Genera la URL de descarga del PDF
    const pdfDownloadUrl = `http://${process.env.HOST}/documentos/downloadPDFDocumento/${documento.titulo}.pdf`;

    res.json({ message: "PDF generado exitosamente.", pdfDownloadUrl });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error al generar el PDF.');
  }
};


documentosCtrl.downloadPDFDocumento = async (req, res) => {
  try {
    const { filename } = req.params;
    const pdfPath = `src/uploads/matriculas/${filename}`; // Ajusta la ruta

    res.download(pdfPath, `${filename}`, (err) => {
      if (err) {
        console.error('Error al descargar el archivo:', err);
        res.status(500).send('Error al descargar el archivo.');
      }
    });
  } catch (error) {
    console.error('Error al manejar la solicitud de descarga:', error);
    res.status(500).send('Error al manejar la solicitud de descarga.');
  }
};

module.exports = documentosCtrl;