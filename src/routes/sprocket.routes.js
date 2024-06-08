import express from 'express';
import { createSprocketController, updateSprocketController, getSprocketByIdController } from '../controllers/sprockets/index.controller.js';

const router = express.Router();
export const sprocketRoutes = router;

router.post('/', createSprocketController);
router.get('/:id', getSprocketByIdController);
router.put('/:id', updateSprocketController);
