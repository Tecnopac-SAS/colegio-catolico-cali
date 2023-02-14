const {Router} = require('express');
const router = Router();
const HistoricoCarteraCtrl = require('../controllers/historicoCartera.controller');

router.get('/listarHistoricoCartera/:id',HistoricoCarteraCtrl.listarHistoricoCartera);
router.get('/listarHistoricoCarteraSearch/:dato/:id',HistoricoCarteraCtrl.listarHistoricoCarteraSearch);



module.exports= router