const express = require('express');

const router = express.Router();

const usersRoute = require('./user.routes');
const categoryRoute = require('./category.routes');
const postRoute = require('./post.routes');

router
  .use('/users', usersRoute)
  .use('/categories', categoryRoute)
  .use('/posts', postRoute);

module.exports = router;
