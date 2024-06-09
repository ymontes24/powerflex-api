import Joi from "joi";

export const factoryIdSchema = Joi.object({
    id: Joi.number().integer().required()
});