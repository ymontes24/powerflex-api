import express from 'express';
import { getAllFactoriesController, getFactoryByIdController } from '../controllers/factories/index.controller.js';

const router = express.Router();
export const factoryRoutes = router;

router.get('/', getAllFactoriesController);
router.get('/:id', getFactoryByIdController);
