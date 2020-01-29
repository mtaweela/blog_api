'use strict';

require('dotenv').config();
const express = require('express');
var cors = require('cors');
var logger = require('morgan');
var passport = require('passport');

var app = express();

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
    .use(express.urlencoded({ extended: false }))
    // .use("/api", mainRouter)

module.exports = app;
