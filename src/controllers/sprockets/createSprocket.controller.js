import { createSprocket } from '../../services/sprockets/sprockets.service.js';
import { sprocketCreateSchema } from '../../schema/sprocket.schema.js';

export const createSprocketController = async (req, res, next) => {
    try {
        const sprocket = req.body;
        const { error } = sprocketCreateSchema.validate(sprocket);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newSprocket = await createSprocket(sprocket);
        res.status(201).json(newSprocket);
    } catch (error) {
        next(error);
    }
}