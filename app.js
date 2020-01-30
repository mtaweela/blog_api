require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');

const app = express();

const mainRouter = require('./server/routes/main.routes');
require('./server/services/passport.strategy');

/**
 * configure app
 */
app
  .options('*', cors())
  .use(cors())
  .use(logger('dev'))
  .use(passport.initialize())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api', mainRouter)
  .use('*', (req, res) => res.status(404).json({ details: 'wrong url' }));

module.exports = app;
