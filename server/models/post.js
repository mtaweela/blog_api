module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Post.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };
  return Post;
};
