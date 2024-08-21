const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.get('/listarUsuarios',userCtrl.consultarUsuarios);
router.get('/listarUsuario/:id',userCtrl.getUserId);
router.get('/listarUsuarioEmail/:email',userCtrl.getUser);

router.post('/agregarUsuario',
    [
        check('name').notEmpty().withMessage("Ingresa el campo name."),
        check('email').notEmpty().withMessage("Ingrese el campo email."),
        check('password').notEmpty().withMessage("Ingrese el campo password."),
        check("idRole").notEmpty().withMessage("Ingrese el campo idRole.")
    ],
    userCtrl.crearUsuario
);
router.post('/login',[
    check("email").notEmpty().withMessage("Ingrese el campo email"),
    check("password").notEmpty().withMessage("Ingrese el campo contraseña"),
    check("tipo").optional()
] , userCtrl.login);

router.put('/actualizarUsuario/:id',
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("email").notEmpty().withMessage("Ingrese el campo email"),
    check("password").notEmpty().withMessage("Ingrese el campo password"),
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive"),
    check("idRole").notEmpty().withMessage("Ingrese el campo idRole")
    ,userCtrl.actualizarUsuario)
router.put('/deshabilitarUsuario/:id',[
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive")
],userCtrl.deshabilitarUsuario)

router.get('/recuperarPass/:email',userCtrl.recuperarPass)
router.put('/nuevaContrasena/:id' ,userCtrl.nuevaContraseña)
router.put('/nuevaContrasenaConfirm/:id' ,[
    check("newPass").notEmpty().withMessage("Ingrese el campo newPass"),
    check("passActual").notEmpty().withMessage("Ingrese el campo newPass")]
    ,userCtrl.nuevaContraseñaConfirm)

router.get('/generarCaptcha' ,userCtrl.cadenaAleatoria)

module.exports= router