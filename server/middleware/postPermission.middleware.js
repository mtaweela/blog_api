const debug = require('debug')('blog_api:postPermissionMiddleware');

const { Post } = require('../models');

const checkUserPostPermission = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((post) => {
    if (!post || post.userId === req.user.id) return next();
    return res.status(403).json({ details: 'you do not have permission.' });
  }).catch((err) => {
    debug(err);
    res.status(500).json({ details: 'There was an error!' });
  });
};

module.exports = { checkUserPostPermission };
