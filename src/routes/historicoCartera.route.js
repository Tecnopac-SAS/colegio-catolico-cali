const {Router} = require('express');
const router = Router();
const HistoricoCarteraCtrl = require('../controllers/historicoCartera.controller');

/**
 * @swagger
 * /listarHistoricoCartera/{id}:
 *   get:
 *     summary: Listar el histórico de cartera por ID
 *     tags: [HistoricoCartera]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante para el cual se listará el histórico de cartera
 *     responses:
 *       200:
 *         description: Histórico de cartera obtenido exitosamente
 *       404:
 *         description: Histórico de cartera no encontrado
 *       500:
 *         description: Error en el servidor al obtener el histórico de cartera
 */
router.get('/listarHistoricoCartera/:id',HistoricoCarteraCtrl.listarHistoricoCartera);

/**
 * @swagger
 * /totalDeuda/{id}:
 *   get:
 *     summary: Obtener el total de la deuda de un estudiante por ID
 *     tags: [HistoricoCartera]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante para el cual se calculará el total de la deuda
 *     responses:
 *       200:
 *         description: Total de la deuda obtenido exitosamente
 *       404:
 *         description: Deuda no encontrada para el estudiante especificado
 *       500:
 *         description: Error en el servidor al calcular el total de la deuda
 */
router.get('/totalDeuda/:id',HistoricoCarteraCtrl.totalDeuda);

/**
 * @swagger
 * /totalDeudas:
 *   get:
 *     summary: Obtener el total de todas las deudas
 *     tags: [HistoricoCartera]
 *     responses:
 *       200:
 *         description: Total de todas las deudas obtenido exitosamente
 *       500:
 *         description: Error en el servidor al calcular el total de las deudas
 */
router.get('/totalDeudas',HistoricoCarteraCtrl.totalDeudas);

/**
 * @swagger
 * /totalDeudasAcudiente/{id}:
 *   get:
 *     summary: Obtener el total de las deudas de un acudiente por ID
 *     tags: [HistoricoCartera]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del acudiente para el cual se calculará el total de las deudas
 *     responses:
 *       200:
 *         description: Total de las deudas del acudiente obtenido exitosamente
 *       404:
 *         description: Deudas no encontradas para el acudiente especificado
 *       500:
 *         description: Error en el servidor al calcular el total de las deudas del acudiente
 */
router.get('/totalDeudasAcudiente/:id',HistoricoCarteraCtrl.totalDeudasAcudiente);

/**
 * @swagger
 * /listarHistoricoCarteraSearch/{dato}/{id}:
 *   get:
 *     summary: Buscar en el histórico de cartera por un dato específico
 *     tags: [HistoricoCartera]
 *     parameters:
 *       - in: path
 *         name: dato
 *         schema:
 *           type: string
 *         required: true
 *         description: Dato a buscar en el histórico de cartera
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante para el cual se realizará la búsqueda
 *     responses:
 *       200:
 *         description: Resultados de la búsqueda en el histórico de cartera obtenidos exitosamente
 *       404:
 *         description: No se encontraron resultados en el histórico de cartera para el dato especificado
 *       500:
 *         description: Error en el servidor al realizar la búsqueda en el histórico de cartera
 */
router.get('/listarHistoricoCarteraSearch/:dato/:id',HistoricoCarteraCtrl.listarHistoricoCarteraSearch);

module.exports= router