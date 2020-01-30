const passport = require('passport');
const express = require('express');

const router = express.Router();

const {
  getMe, addUser, getToken,
} = require('../controllers/user.controller');
const { validate } = require('../middleware/validator.middleware');
const { UserCreateScheme, UserLoginScheme } = require('../validators/User');

router
  /**
   * user apis
   */
  .post('/', [validate(UserCreateScheme)], addUser)
  .post('/tokens/me', [validate(UserLoginScheme)], getToken)
  .get('/me',
    [passport.authenticate('jwt', { session: false })],
    getMe);

module.exports = router;
