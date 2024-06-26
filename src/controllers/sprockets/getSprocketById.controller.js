import { getSprocketById } from '../../services/sprockets/sprockets.service.js';
import { sprocketIdSchema } from '../../schema/sprocket.schema.js';

export const getSprocketByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await sprocketIdSchema.validateAsync({ id });
        const sprocket = await getSprocketById(id);
        if (!sprocket) {
            return res.status(404).json({ error: 'Sprocket not found' });
        }
        const formattedSprocket = {
            id: sprocket.id,
            teeth: sprocket.teeth,
            pitch_diameter: sprocket.pitch_diameter,
            outside_diameter: sprocket.outside_diameter,
            pitch: sprocket.pitch
        };
        res.status(200).json(formattedSprocket);
    } catch (error) {
        if (error.isJoi) {
            return res.status(400).json({ error: error.message });
        }
        next(error);
    }
}