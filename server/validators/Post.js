const Joi = require('@hapi/joi');


const PostValidator = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  userId: Joi.number().required(),
  categoryId: Joi.number().required(),
});

module.exports = { PostValidator };
