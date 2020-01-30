const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const debug = require('debug')('blog_api:passportStrategy');

const { User } = require('./../models');

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  ignoreExpiration: true,
};

passport.use(new JWTStrategy(options, (JWTPayload, done) => {
  debug('inside startegy.');
  User.findOne({ where: { id: JWTPayload.id } })
    .then((user) => {
      debug(user);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch((err) => {
      debug(err);
      return done(err, false);
    });
}));
