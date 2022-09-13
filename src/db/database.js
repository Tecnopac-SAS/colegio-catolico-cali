/* 
const mysql = require("promise-mysql");
const config = require("../../config");

const connection = mysql.createConnection({
    host: config.db.host,
    database: config.db.dbName,
    user: config.db.user,
    password: config.db.pass
});

const connectDb = ((err,cone) => {
    console.log("Conectado a la bd " + config.db.dbName )
    return connection;
});

module.exports= connectDb; */