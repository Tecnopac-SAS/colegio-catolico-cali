const {Router} = require('express');
const router = Router();
const DownloadCtrl = require('../controllers/downloads.controller');

router.get('/tuition/:idtuition/:filetype',DownloadCtrl.downloadTuitionFiles);

module.exports= router