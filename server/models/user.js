module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Post);
  };
  return User;
};
