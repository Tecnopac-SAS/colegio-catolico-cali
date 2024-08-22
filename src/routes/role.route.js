const {Router} = require('express');
const router = Router();
const roleCtrl = require('../controllers/role.controller');
const {check} = require("express-validator");

/**
 * @swagger
 * /role/listarRoles:
 *   get:
 *     summary: Obtiene la lista de todos los roles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Lista de roles obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listarRoles', roleCtrl.consultarRoles);

/**
 * @swagger
 * /role/CrearRole:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Nombre del rol
 *     responses:
 *       201:
 *         description: Rol creado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/CrearRole', [
    check('role').notEmpty().withMessage("Ingresa el campo role.")
], roleCtrl.crearRole);

/**
 * @swagger
 * /role/actualizarRole/{id}:
 *   put:
 *     summary: Actualiza un rol existente
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del rol a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Nombre del rol
 *     responses:
 *       200:
 *         description: Rol actualizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/actualizarRole/:id',
    [check('role').notEmpty().withMessage("Ingresa el campo role.")]
    , roleCtrl.actualizarRole);
/**
 * @swagger
 * /role/eliminarRole/{id}:
 *   delete:
 *     summary: Elimina un rol
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del rol a eliminar
 *     responses:
 *       200:
 *         description: Rol eliminado exitosamente
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/eliminarRole/:id', roleCtrl.deleteRole);


module.exports = router