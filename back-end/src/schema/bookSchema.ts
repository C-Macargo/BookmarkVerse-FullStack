import Joi, { Schema } from 'joi';

export const bookSchema: Schema = Joi.object({
  title: Joi.string().required(),
});
