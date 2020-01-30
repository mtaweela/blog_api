const Joi = require('@hapi/joi');

const UserCreateScheme = Joi.object({
  username: Joi
    .string()
    .required(),
  password: Joi
    .string()
    .required()
    .min(6),
});

const UserLoginScheme = Joi.object({
  username: Joi
    .string()
    .required(),
  password: Joi
    .string()
    .required(),
});

module.exports = { UserCreateScheme, UserLoginScheme };
