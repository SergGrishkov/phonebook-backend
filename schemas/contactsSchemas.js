import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: name" }),
  number: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: number" }),
});

export const updateContactSchema = Joi.object({});
