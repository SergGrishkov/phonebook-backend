import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: name" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: email" }),
  password: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: password" }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: email" }),
  password: Joi.string()
    .required()
    .messages({ "any.required": "Missing required field: password" }),
});