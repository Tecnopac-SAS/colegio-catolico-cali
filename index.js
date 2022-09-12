//requerir las dependencias necesarias
require('dotenv').config()
const config = require('./config')
const db = require('./config')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
const userModel = require('./src/models/user.model')
//const connectDb = require('./src/db/database')
//const connectDbSq = require('./src/db/databaseSq')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

//Rutas
app.use('/user',require('./src/routes/user.route'))


//Llamado a la bd y al servidor
//connectDbSq(db)
userModel.sync({force:true})

app.listen(config.app.port || 3000,()=>console.log(`listen on server: ${config.app.port}`));
