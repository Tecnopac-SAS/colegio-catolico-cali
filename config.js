const config = {
    app:{
        port: process.env.PORT,
    },
    db: {
        //port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD
    },

    secret: {
        word: process.env.SECRET_KEY,
    },
    email: {
        email: process.env.EMAIL,
        pass: process.env.PASSEMAIL,
    }
}

module.exports = config
