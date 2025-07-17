import Joi from 'joi';

export const placesSchema=Joi.object({
    id:Joi.number().integer().required(),
    name:Joi.string().min(1).required(),
    city:Joi.string().min(1).required(),
    state:Joi.string().min(1).required(),
    description:Joi.string().min(1).required(),
    lattitude:Joi.number().min(-90).max(90).required(),
    longitude:Joi.number().min(-180).max(180).required(),
    image_path:Joi.string().min(1).pattern(/^place_images/).required()
});