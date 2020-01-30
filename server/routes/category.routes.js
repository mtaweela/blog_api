const passport = require('passport');
const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');

router
  /**
   * category apis
   */
  .use([passport.authenticate('jwt', { session: false })])
  .get('/', categoryController.getCategories)
  .get('/:id', categoryController.getCategoryById);

module.exports = router;
