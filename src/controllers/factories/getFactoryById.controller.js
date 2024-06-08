import { getFactoryById } from '../../services/factory/factory.service.js';
import { factoryIdSchema } from '../../schema/factory.schema.js';

export const getFactoryByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { error: idError } = await factoryIdSchema.validateAsync({ id });
        if (idError) {
            return res.status(400).json({ error: idError.details[0].message });
        }
        const factory = await getFactoryById(id);
        if (!factory) {
            return res.status(404).json({ error: 'Factory not found' });
        }
        const formattedFactory = {
            factory: {
                name: factory.name,
                location: factory.location,
                chart_data: {
                    sprocket_production_actual: factory.sprocketProduction.map(prod => prod.actual_production),
                    sprocket_production_goal: factory.sprocketProduction.map(prod => prod.goal_production),
                    time: factory.sprocketProduction.map(prod => prod.timestamp)
                }
            }
        };
        res.status(200).json(formattedFactory);
    } catch (error) {
        next(error);
    }
}