import Joi from 'joi';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const locationGet = Joi.object({
    id: Joi.string()
        .custom((value, helper) => (ObjectId.isValid(value)
            ? true
            : helper.message('Not a Valid MongoDB ID')))
        .required(),
});

const locationPost = Joi.object({
    latitude: Joi.number()
        .max(180)
        .min(-180)
        .required(),
    longitude: Joi.number()
        .max(180)
        .min(-180)
        .required(),
    name: Joi.string()
        .min(1)
        .max(30)
        .required(),
    minWeather: Joi.number()
        .max(60)
        .min(-60)
        .required(),
    maxWeather: Joi.number()
        .max(60)
        .min(-60)
        .required(),
});

const locationPut = Joi.object({
    latitude: Joi.number()
        .max(180)
        .min(-180),
    longitude: Joi.number()
        .max(180)
        .min(-180),
    name: Joi.string()
        .min(1)
        .max(30),
    minWeather: Joi.number()
        .max(60)
        .min(-60),
    maxWeather: Joi.number()
        .max(60)
        .min(-60),
}).min(1)
    .messages({
        'object.min': 'Req.body must have at least one key',
    });

export default {
    locationGet,
    locationPost,
    locationPut,
};
