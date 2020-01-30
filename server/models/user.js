const bcrypt = require('bcrypt');
const _ = require('lodash');

const { encrypt } = require('../services/ecrypt');

async function hashPassword(user) {
  if (user.changed('password')) {
    user.password = await encrypt(user.password);
  }
  return user.password;
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeValidate: hashPassword,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post);
  };
  User.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }

      return callback(null, isMatch);
    });
  };

  User.prototype.getRawUser = function () {
    return _.omit(this.dataValues, ['password']);
  };
  return User;
};
