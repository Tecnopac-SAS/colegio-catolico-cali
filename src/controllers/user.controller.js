const getConnection = require('../db/database')
const userCtrl = {};

userCtrl.consultarUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users");
        res.json({
            status: 200,
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
        res.json({
            mensaje: 'Error en la consulta'
        })
    }
};

userCtrl.consultarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE id = ?", id);
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


userCtrl.crearUsuario = async(req,res)=>{
    try {
        const {name,email,password}= req.body 
        if(name==null || email == null || password==null){
           res.json({
               mensaje: 'Los campos deben estar diligenciados en su totalidad'
           })
       }
       else {
           const users = {name,email,password };
           const connection = await getConnection();
           await connection.query("INSERT INTO users SET ?", users);
           res.json({
            mensaje: 'ok',
            users
        })
       }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
}

userCtrl.actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { name,email,password } = req.body;

        if (id === undefined || name === undefined || email === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const user = { name,email,password };
        const connection = await getConnection();
        const result = await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);
        res.json({
            mensaje: 'ok',
            result
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

userCtrl.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM users WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


module.exports= userCtrl