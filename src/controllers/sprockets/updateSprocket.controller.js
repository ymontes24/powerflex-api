import { updateSprocket, getSprocketById } from '../../services/sprockets/sprockets.service.js';
import { sprocketIdSchema, sprocketUpdateSchema } from '../../schema/sprocket.schema.js';

export const updateSprocketController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sprocket = req.body;

        const { error: idError } = await sprocketIdSchema.validateAsync({ id });
        if (idError) {
            return res.status(400).json({ error: idError.details[0].message });
        }

        const { error: sprocketError } = await sprocketUpdateSchema.validateAsync(sprocket);
        if (sprocketError) {
            return res.status(400).json({ error: sprocketError.details[0].message });
        }

        const getsprocket = await getSprocketById(id);
        if (!getsprocket) {
            return res.status(404).json({ error: 'Sprocket not found' });
        }

        await updateSprocket(id, sprocket);
        res.status(200).json({ message: 'Sprocket updated successfully' });
    } catch (error) {
        next(error);
    }
}
