const express = require('express');
const passport = require('passport');

const router = express.Router();

const {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/post.controller');
const { checkUserPostPermission } = require('../middleware/postPermission.middleware');

router
  /**
   * user apis
   */
  .use([passport.authenticate('jwt', { session: false })])
  .post('/', addPost)
  .get('/', getPosts)
  .get('/:id/', getPostById)
  .put('/:id/', checkUserPostPermission, updatePost)
  .delete('/:id/', checkUserPostPermission, deletePost);

module.exports = router;
