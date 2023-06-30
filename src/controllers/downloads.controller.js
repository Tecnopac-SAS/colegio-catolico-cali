const config = require('../../config')
const fs = require('fs');
const path = require('path');
const courseCtrl = {};

courseCtrl.downloadTuitionFiles = async (req, res) => {
    try {
        const { idtuition, filetype } = req.params; // Ruta del archivo que deseas descargar
        const filePath = path.join(__dirname, '../../public')+`/matriculas/${idtuition}/${filetype}.pdf`; // Ruta del archivo que deseas descargar
        return res.download(filePath);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
    }
};

module.exports= courseCtrl