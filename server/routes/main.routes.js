const express = require('express');

const router = express.Router();

const usersRoute = require('./user.routes');

router
  .use('/users', usersRoute);

module.exports = router;
