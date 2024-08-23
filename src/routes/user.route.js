const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');
const {check} = require("express-validator");

/**
 * @openapi
 * /user/listarUsuarios:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: "Consultar Usuarios"
 *     description: Obtener todos los usuarios.
 *     responses:
 *       '200':
 *         description: Consulta con éxito
 *       '401':
 *         description: Error no autorizado
 *     security:
 *       - bearerAuth: []
 */
router.get('/listarUsuarios',userCtrl.consultarUsuarios);

/**
 * @openapi
 * /user/listarUsuario/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: "Consultar Usuario por ID"
 *     description: Obtener un usuario por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario encontrado
 *       '404':
 *         description: Usuario no encontrado
 */
router.get('/listarUsuario/:id',userCtrl.getUserId);

/**
 * @openapi
 * /user/listarUsuarioEmail/{email}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: "Consultar Usuario por Email"
 *     description: Obtener un usuario por su email.
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         description: Email del usuario
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario encontrado
 *       '404':
 *         description: Usuario no encontrado
 */
router.get('/listarUsuarioEmail/:email',userCtrl.getUser);

/**
 * @openapi
 * /user/agregarUsuario:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: "Agregar un nuevo usuario"
 *     description: Agregar un nuevo usuario al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               idRole:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Usuario creado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/agregarUsuario',
    [
        check('name').notEmpty().withMessage("Ingresa el campo name."),
        check('email').notEmpty().withMessage("Ingrese el campo email."),
        check('password').notEmpty().withMessage("Ingrese el campo password."),
        check("idRole").notEmpty().withMessage("Ingrese el campo idRole.")
    ],
    userCtrl.crearUsuario
);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Permite a los usuarios iniciar sesión en la aplicación.
 *     tags:
 *      - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *                 example: usuario@ejemplo.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *                 example: 123456
 *               tipo:
 *                 type: string
 *                 description: Tipo de usuario (opcional).
 *                 example: admin
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/login',[
    check("email").notEmpty().withMessage("Ingrese el campo email"),
    check("password").notEmpty().withMessage("Ingrese el campo contraseña"),
    check("tipo").optional()
] , userCtrl.login);


/**
 * @openapi
 * /user/actualizarUsuario/{id}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: "Actualizar usuario"
 *     description: Actualizar los datos de un usuario existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               idRole:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario actualizado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Usuario no encontrado
 */
router.put('/actualizarUsuario/:id',
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("email").notEmpty().withMessage("Ingrese el campo email"),
    check("password").notEmpty().withMessage("Ingrese el campo password"),
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive"),
    check("idRole").notEmpty().withMessage("Ingrese el campo idRole")
    ,userCtrl.actualizarUsuario)

/**
 * @openapi
 * /user/deshabilitarUsuario/{id}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: "Deshabilitar usuario"
 *     description: Deshabilitar un usuario en el sistema.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a deshabilitar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Usuario deshabilitado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Usuario no encontrado
 */
router.put('/deshabilitarUsuario/:id',[
    check("isActive").notEmpty().withMessage("Ingrese el campo isActive")
],userCtrl.deshabilitarUsuario)

/**
 * @openapi
 * /user/recuperarPass/{email}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: "Recuperar contraseña"
 *     description: Enviar un correo para recuperar la contraseña.
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         description: Email del usuario para recuperar la contraseña
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Correo enviado con éxito
 *       '404':
 *         description: Usuario no encontrado
 */
router.get('/recuperarPass/:email',userCtrl.recuperarPass)

/**
 * @openapi
 * /user/nuevaContrasena/{id}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: "Establecer nueva contraseña"
 *     description: Establecer una nueva contraseña para el usuario.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPass:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Contraseña actualizada con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Usuario no encontrado
 */
router.put('/nuevaContrasena/:id' ,userCtrl.nuevaContraseña)

/**
 * @openapi
 * /user/nuevaContrasenaConfirm/{id}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: "Confirmar nueva contraseña"
 *     description: Confirmar y actualizar la nueva contraseña.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPass:
 *                 type: string
 *               passActual:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Contraseña confirmada y actualizada con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Usuario no encontrado
 */
router.put('/nuevaContrasenaConfirm/:id' ,[
    check("newPass").notEmpty().withMessage("Ingrese el campo newPass"),
    check("passActual").notEmpty().withMessage("Ingrese el campo newPass")]
    ,userCtrl.nuevaContraseñaConfirm)

/**
 * @openapi
 * /user/generarCaptcha:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: "Generar CAPTCHA"
 *     description: Genera un CAPTCHA aleatorio.
 *     responses:
 *       '200':
 *         description: CAPTCHA generado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 captcha:
 *                   type: string
 *                   description: Código CAPTCHA generado
 *       '500':
 *         description: Error al generar el CAPTCHA
 */
router.get('/generarCaptcha' ,userCtrl.cadenaAleatoria)

module.exports= router