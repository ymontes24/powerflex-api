import express from 'express';
import { createSprocketController, updateSprocketController, getSprocketByIdController } from '../controllers/sprockets/index.controller.js';

const router = express.Router();
export const sprocketRoutes = router;

/**
 * @swagger
 * tags:
 *   name: Sprockets
 *   description: Sprocket management
 */

/**
 * @swagger
 * /sprockets:
 *   post:
 *     summary: Create a new sprocket
 *     tags: [Sprockets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teeth:
 *                 type: integer
 *                 example: 5
 *               pitch_diameter:
 *                 type: integer
 *                 example: 5
 *               outside_diameter:
 *                 type: integer
 *                 example: 6
 *               pitch:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Created sprocket
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 teeth:
 *                   type: integer
 *                   example: 5
 *                 pitch_diameter:
 *                   type: integer
 *                   example: 5
 *                 outside_diameter:
 *                   type: integer
 *                   example: 6
 *                 pitch:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Sprocket data is required
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                 type: string
 *                 example: data is required
 */
router.post('/', createSprocketController);
/**
 * @swagger
 * /sprockets/{id}:
 *   get:
 *     summary: Retrieve a sprocket by ID
 *     tags: [Sprockets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The sprocket ID
 *     responses:
 *       200:
 *         description: Sprocket data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 teeth:
 *                   type: integer
 *                   example: 5
 *                 pitch_diameter:
 *                   type: integer
 *                   example: 5
 *                 outside_diameter:
 *                   type: integer
 *                   example: 6
 *                 pitch:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Sprocket not found
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                 type: string
 *                 example: Sprocket not found
 */
router.get('/:id', getSprocketByIdController);
/**
 * @swagger
 * /sprockets/{id}:
 *   put:
 *     summary: Update a sprocket by ID
 *     tags: [Sprockets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The sprocket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teeth:
 *                 type: integer
 *                 example: 5
 *               pitch_diameter:
 *                 type: integer
 *                 example: 5
 *               outside_diameter:
 *                 type: integer
 *                 example: 6
 *               pitch:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Updated sprocket
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 teeth:
 *                   type: integer
 *                   example: 5
 *                 pitch_diameter:
 *                   type: integer
 *                   example: 5
 *                 outside_diameter:
 *                   type: integer
 *                   example: 6
 *                 pitch:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Sprocket not found
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                 type: string
 *                 example: Sprocket not found
 *       400:
 *         description: Bad Sprocket data type
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                 type: string
 *                 example: data must be a number
 */
router.put('/:id', updateSprocketController);
