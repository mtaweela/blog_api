const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');

const { User } = require('./../models');

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  ignoreExpiration: true,
};

passport.use(new JWTStrategy(options, (JWTPayload, done) => {
  User.findOne({ where: { id: JWTPayload.id } })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch((err) => {
      return done(err, false);
    });
}));
