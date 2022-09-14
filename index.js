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
const bdSq = require('./src/db/databaseSq')
const Sequelize = require('sequelize');
require('./src/models/asociations');
//const userModel = require('./models/User.model')
//const roleModel = require('./models/Role.model')
//const bdSqm = require('./src/db/databaseSqm')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

//Rutas
app.use('/user',require('./src/routes/user.route'))

roleModel.sync({ alter: true })
userModel.sync({ alter: true })

app.listen(config.app.port || 3000,()=>console.log(`listen on server: ${config.app.port}`));
