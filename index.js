//requerir las dependencias necesarias
require('dotenv').config()
const config = require('./config')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
const userModel = require('.//src/models/user.model')
const roleModel = require('.//src/models/role.model')
const periodModel = require('./src/models/period.model')
const inscriptionModel = require('./src/models/inscription.model')
const gradesModel = require('./src/models/grade.model')
const tuitionModel= require('./src/models/tuition.model')
const tuitionTypeModel = require('./src/models/tuitionType.model')
const extracurricularModel = require('./src/models/extracurricular.model')
const bdSq = require('./src/db/databaseSq')
const Sequelize = require('sequelize');
require('./src/models/asociations');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

//Rutas
app.use('/user',require('./src/routes/user.route'))
app.use('/role',require('./src/routes/role.route'))
app.use('/inscription',require('./src/routes/inscription.route'))
app.use('/period',require('./src/routes/period.route'))
app.use('/grades',require('./src/routes/grades.route'))
app.use('/tuition',require('./src/routes/tuition.route'))
app.use('/tuitionType',require('./src/routes/tuitionType.route'))
app.use('/extracurricular',require('./src/routes/extracurricular.route'))

roleModel.sync({ alter: true })
userModel.sync({ alter: true })
periodModel.sync({ alter: true })
inscriptionModel.sync({ alter: true })

gradesModel.sync({ alter: true })
tuitionTypeModel.sync({ alter: true })
tuitionModel.sync({ alter: true })

extracurricularModel.sync({ alter: true })


app.listen(config.app.port || 3000,()=>console.log(`listen on server: ${config.app.port}`));
