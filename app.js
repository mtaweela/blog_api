require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');

const app = express();

// var mainRouter = require("./routes/main.routes");
// require('./server/services/passport.strategy');

/**
 * configure app
 */
app
  .options('*', cors())
  .use(cors())
  .use(logger('dev'))
  .use(passport.initialize())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));
// .use("/api", mainRouter)

module.exports = app;
