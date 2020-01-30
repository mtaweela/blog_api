const express = require('express');

const router = express.Router();

const usersRoute = require('./user.routes');
const categoryRoute = require('./category.routes');

router
  .use('/users', usersRoute)
  .use('/categories', categoryRoute);

module.exports = router;
