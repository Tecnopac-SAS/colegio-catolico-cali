const {Router} = require('express');
const router = Router();
const DiscountCtrl = require('../controllers/discount.controller');
const {check} = require("express-validator");

const frequencyType = ['Unico', 'frecuente'];
const serviceType = ['Pension', 'Matricula']

/**
 * @openapi
 * /discount/listarDiscounts:
 *   get:
 *     tags:
 *       - Descuentos
 *     summary: "Consultar todos los descuentos"
 *     description: Obtener una lista de todos los descuentos registrados.
 *     responses:
 *       '200':
 *         description: Lista de descuentos obtenida con éxito
 *       '500':
 *         description: Error al obtener los descuentos
 */
router.get('/listarDiscounts',DiscountCtrl.consultarDiscounts);

/**
 * @openapi
 * /discount/listarDiscount/{name}:
 *   get:
 *     tags:
 *       - Descuentos
 *     summary: "Consultar descuento por nombre"
 *     description: Obtener un descuento específico por su nombre.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Nombre del descuento
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Descuento encontrado
 *       '404':
 *         description: Descuento no encontrado
 */
router.get('/listarDiscount/:name',DiscountCtrl.consultarDiscount);

/**
 * @openapi
 * /discount/listarDiscountId/{id}:
 *   get:
 *     tags:
 *       - Descuentos
 *     summary: "Consultar descuento por ID"
 *     description: Obtener un descuento específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del descuento
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Descuento encontrado
 *       '404':
 *         description: Descuento no encontrado
 */
router.get('/listarDiscountId/:id',DiscountCtrl.consultarId);

/**
 * @openapi
 * /discount/crearDiscount:
 *   post:
 *     tags:
 *       - Descuentos
 *     summary: "Crear un nuevo descuento"
 *     description: Crear un nuevo descuento con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               starDate:
 *                 type: string
 *                 format: date
 *               finalDate:
 *                 type: string
 *                 format: date
 *               percentage:
 *                 type: number
 *               useType:
 *                 type: string
 *                 nullable: true
 *               frequency:
 *                 type: string
 *               service:
 *                 type: string
 *               status:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Descuento creado con éxito
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/crearDiscount',[
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("starDate").notEmpty().withMessage("Ingresa el campo starDate"),
    check("finalDate").notEmpty().withMessage("Ingresa el campo finalDate"),
    check("percentage").notEmpty().withMessage("Ingresa el campo percentage"),
    check("useType").optional(),
    check("frequency").notEmpty().withMessage("Ingresa el campo frequency").bail().isIn(frequencyType).withMessage("Ingresa frequency correctamente"),
    check("service").notEmpty().withMessage("Ingresa el campo service").bail().isIn(serviceType).withMessage("El tipo de servicio no es valido"),
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("Este campo tiene que ser booleano")
],DiscountCtrl.crearDiscount);

/**
 * @openapi
 * /discount/actualizarDiscount/{id}:
 *   put:
 *     tags:
 *       - Descuentos
 *     summary: "Actualizar descuento"
 *     description: Actualizar los datos de un descuento existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del descuento a actualizar
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
 *               starDate:
 *                 type: string
 *                 format: date
 *               finalDate:
 *                 type: string
 *                 format: date
 *               percentage:
 *                 type: number
 *               useType:
 *                 type: string
 *               frequency:
 *                 type: string
 *               service:
 *                 type: string
 *               status:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Descuento actualizado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Descuento no encontrado
 */
router.put('/actualizarDiscount/:id',
    check("name").notEmpty().withMessage("Ingrese el campo name"),
    check("starDate").notEmpty().withMessage("Ingresa el campo starDate"),
    check("finalDate").notEmpty().withMessage("Ingresa el campo finalDate"),
    check("percentage").notEmpty().withMessage("Ingresa el campo percentage"),
    check("useType").notEmpty().withMessage("Ingresa el campo useType"),
    check("frequency").notEmpty().withMessage("Ingresa el campo frequency").bail().isIn(frequencyType).withMessage("Ingresa frequency correctamente"),
    check("service").notEmpty().withMessage("Ingresa el campo service").bail().isIn(serviceType).withMessage("El tipo de servicio no es valido"),
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("Este campo tiene que ser booleano")
    ,DiscountCtrl.actualizarDiscount);

/**
 * @openapi
 * /discount/deshabilitar/{id}:
 *   put:
 *     tags:
 *       - Descuentos
 *     summary: "Deshabilitar descuento"
 *     description: Deshabilitar un descuento existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del descuento a deshabilitar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Descuento deshabilitado con éxito
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Descuento no encontrado
 */
router.put('/deshabilitar/:id' ,[
    check("status").notEmpty().withMessage("Ingresa el campo status").bail().isBoolean().withMessage("El campo status es tipo boolean")
],DiscountCtrl.deshabilitar);

/**
 * @openapi
 * /discount/eliminar/{id}:
 *   delete:
 *     tags:
 *       - Descuentos
 *     summary: "Eliminar descuento"
 *     description: Eliminar un descuento por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del descuento a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Descuento eliminado con éxito
 *       '404':
 *         description: Descuento no encontrado
 */
router.delete('/eliminar/:id' ,DiscountCtrl.eliminar)

module.exports= router