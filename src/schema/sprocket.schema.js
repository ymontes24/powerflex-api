import Joi from "joi";

export const sprocketIdSchema = Joi.object({
    id: Joi.number().integer().required()
});

export const sprocketCreateSchema = Joi.object({
    teeth: Joi.number().integer().required(),
    pitch_diameter: Joi.number().precision(2).required(),
    outside_diameter: Joi.number().precision(2).required(),
    pitch: Joi.number().precision(2).required()
});

export const sprocketUpdateSchema = Joi.object({
    teeth: Joi.number().integer(),
    pitch_diameter: Joi.number().precision(2),
    outside_diameter: Joi.number().precision(2),
    pitch: Joi.number().precision(2)
});