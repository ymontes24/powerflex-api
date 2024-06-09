import { getAllFactories } from '../../services/factory/factory.service.js';

export const getAllFactoriesController = async (req, res, next) => {
    try {
        const factories = await getAllFactories();
        const formattedFactories = factories.map(factory => ({
            factory: {
                id: factory.id,
                name: factory.name,
                location: factory.location,
                chart_data: {
                    sprocket_production_actual: factory.sprocketProduction.map(prod => prod.actual_production),
                    sprocket_production_goal: factory.sprocketProduction.map(prod => prod.goal_production),
                    time: factory.sprocketProduction.map(prod => prod.timestamp)
                }
            }
        }));
        res.status(200).json(formattedFactories);
    } catch (error) {
        next(error);
    }
};