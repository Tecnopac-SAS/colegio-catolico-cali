const {Router} = require('express');
const router = Router();
const gradesCtrl = require('../controllers/grades.controller');

router.get('/listargradess',gradesCtrl.consultargradess);
router.get('/Creargrades',gradesCtrl.creargrades);





module.exports= router