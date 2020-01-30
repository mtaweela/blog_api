const debug = require('debug')('blog_api:usercontroller');

const { Category } = require('../models');

const getCategories = (req, res) => {
  Category.findAll().then((categories) => {
    return res.json(categories);
  }).catch((err) => {
    debug(err);
    return res.status(500).json({ details: 'There was an error!' });
  });
};

const getCategoryById = (req, res) => {
  Category.findOne(req.query).then((category) => {
    if (!category) return res.status(404).json({ details: 'category not found.' });
    return res.json(category.get());
  }).catch((err) => {
    debug(err);
    return res.status(500).json({ details: 'There was an error!' });
  });
};

module.exports = {
  getCategories,
  getCategoryById
};
