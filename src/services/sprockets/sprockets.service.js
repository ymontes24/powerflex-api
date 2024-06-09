import { Sprocket } from '../../DB/models/index.model.js';

export const createSprocket = async (sprocket) => {
    try {

        return await Sprocket.create(sprocket);

    } catch (error) {
        throw error;
    }
};

export const getSprocketById = async (id) => {
    try {
        return await Sprocket.findByPk(id);

    } catch (error) {
        throw error;

    }

};

export const updateSprocket = async (id, sprocket) => {
    try {
        return await Sprocket.update(sprocket, {
            where: {
                id
            }
        });

    } catch (error) {
        throw error;

    }

};

