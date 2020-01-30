const jwt = require('jsonwebtoken');
const debug = require('debug')('blog_api:usercontroller');

const { User } = require('../models');


/**
 * User methods
 */
const getMe = (req, res) => {
  res.send(req.user.getRawUser());
};


const addUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user.getRawUser());
    })
    .catch((err) => {
      debug(`Error while user creation : ${err}`);
      res.status(400).send(err);
    });
};


const getToken = (req, res, next) => {
  const { username, password } = req.body;
  const query = { where: { username } };

  User.findOne(query).then((user) => {
    if (!user) {
      return res.status(404).json({
        details: 'Authentication failed!',
      });
    }
    user.comparePasswords(password, (error, isMatch) => {
      if (isMatch && !error) {
        const token = jwt.sign(
          { username: user.username, id: user.id },
          process.env.JWT_SECRET,
          { expiresIn: '30m' },
        );

        return res.json({
          success: true,
          token: `JWT ${token}`,
          isAdmin: user.isAdmin,
        });
      }
      return res.status(404).json({ details: 'Login failed!' });
    });
  }).catch((err) => {
    res.status(500).json({ details: 'There was an error!' });
    debug(err);
  });
};

module.exports = {
  getMe,
  addUser,
  getToken,
};
