import { createSprocket } from '../../services/sprockets/sprockets.service.js';
import { sprocketCreateSchema } from '../../schema/sprocket.schema.js';

export const createSprocketController = async (req, res, next) => {
    try {
        const sprocket = req.body;
        await sprocketCreateSchema.validateAsync(sprocket);
        const newSprocket = await createSprocket(sprocket);
        res.status(201).json(newSprocket);
    } catch (error) {
        if (error.isJoi) {
            return res.status(400).json({ error: error.message });
        }
        next(error);
    }
}