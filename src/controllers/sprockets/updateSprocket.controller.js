import { updateSprocket, getSprocketById } from '../../services/sprockets/sprockets.service.js';
import { sprocketIdSchema, sprocketUpdateSchema } from '../../schema/sprocket.schema.js';

export const updateSprocketController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sprocket = req.body;

        await sprocketIdSchema.validateAsync({ id });
        await sprocketUpdateSchema.validateAsync(sprocket);

        const getsprocket = await getSprocketById(id);
        if (!getsprocket) {
            return res.status(404).json({ error: 'Sprocket not found' });
        }

        await updateSprocket(id, sprocket);
        res.status(200).json({ message: 'Sprocket updated successfully' });
    } catch (error) {
        if (error.isJoi) {
            return res.status(400).json({ error: error.message });
        }
        next(error);
    }
}
