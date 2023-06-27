import Joi, { Schema } from 'joi';

const registerSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().allow('').required(),
  image_url: Joi.string().uri().required(),
});

export default {
  registerSchema: registerSchema as Schema,
};
