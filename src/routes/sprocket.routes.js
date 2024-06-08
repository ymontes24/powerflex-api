import express from 'express';
import { createSprocketController, updateSprocketController, getSprocketByIdController } from '../controllers/sprockets/index.controller.js';

const router = express.Router();
export const sprocketRoutes = router;

router.post('/', createSprocketController);
/**
 * @swagger
 * tags:
 *   name: Sprockets
 *   description: Sprocket management
 */

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
router.put('/:id', updateSprocketController);
