import express from 'express';
import { getAllFactoriesController, getFactoryByIdController } from '../controllers/factories/index.controller.js';

const router = express.Router();
export const factoryRoutes = router;

/**
 * @swagger
 * tags:
 *   name: Factories
 *   description: Factory management
 */

/**
 * @swagger
 * /factories:
 *   get:
 *     summary: Retrieve all factory data
 *     tags: [Factories]
 *     responses:
 *       200:
 *         description: A list of factories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   factory:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Factory A
 *                       location:
 *                         type: string
 *                         example: Location A
 *                       chart_data:
 *                         type: object
 *                         properties:
 *                           sprocket_production_actual:
 *                             type: array
 *                             items:
 *                               type: integer
 *                             example: [32, 29, 31]
 *                           sprocket_production_goal:
 *                             type: array
 *                             items:
 *                               type: integer
 *                             example: [30, 30, 29]
 *                           time:
 *                             type: array
 *                             items:
 *                               type: integer
 *                             example: [1611194818, 1611194878, 1611194938]
 */

router.get('/', getAllFactoriesController);
/**
 * @swagger
 * /factories/{id}:
 *   get:
 *     summary: Retrieve factory data by ID
 *     tags: [Factories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The factory ID
 *     responses:
 *       200:
 *         description: Factory data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 factory:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: Factory A
 *                     location:
 *                       type: string
 *                       example: Location A
 *                     chart_data:
 *                       type: object
 *                       properties:
 *                         sprocket_production_actual:
 *                           type: array
 *                           items:
 *                             type: integer
 *                           example: [32, 29, 31]
 *                         sprocket_production_goal:
 *                           type: array
 *                           items:
 *                             type: integer
 *                           example: [30, 30, 29]
 *                         time:
 *                           type: array
 *                           items:
 *                             type: integer
 *                           example: [1611194818, 1611194878, 1611194938]
 *       404:
 *         description: Factory not found
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                type: string
 *                example: Factory not found  
 * 
 */
router.get('/:id', getFactoryByIdController);
