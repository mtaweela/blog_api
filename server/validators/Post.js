const Joi = require('@hapi/joi');


const PostValidator = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  categoryId: Joi.number().required(),
});

const PostQueryValidator = Joi.object({
  userId: Joi.number(),
  categoryId: Joi.number(),
});
module.exports = { PostValidator, PostQueryValidator };
