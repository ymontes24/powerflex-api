import { Factory, SprocketProduction } from '../../DB/models/index.model.js';


export const getAllFactories = async () => {
    try {
        return await Factory.findAll({
            include: {
                model: SprocketProduction,
                as: 'sprocketProduction'
            }
        });

    } catch (error) {
        throw error;
    }
};

export const getFactoryById = async (id) => {
    try {
        return await Factory.findByPk(id, {
            include: {
                model: SprocketProduction,
                as: 'sprocketProduction'
            }
        });

    } catch (error) {
        throw error;

    }

};