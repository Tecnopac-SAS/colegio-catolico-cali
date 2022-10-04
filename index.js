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
const period = require('./src/models/period.model')
const grade = require('./src/models/grade.model')
const grades = require('./src/models/gradesC.model')
const tuition = require('./src/models/tuition.model')
const registrationType = require('./src/models/registrationType.model')
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
app.use('/grade',require('./src/routes/grade.route'))
app.use('/period',require('./src/routes/period.route'))
app.use('/grades',require('./src/routes/gradesC.route'))
app.use('/tuition',require('./src/routes/tuition.route'))

roleModel.sync({ alter: true })
userModel.sync({ alter: true })
period.sync({ alter: true })
grade.sync({ alter: true })

grades.sync({ force: true })
registrationType.sync({ force: true })
tuition.sync({ force: true })


app.listen(config.app.port || 3000,()=>console.log(`listen on server: ${config.app.port}`));
