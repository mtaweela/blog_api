const debug = require('debug')('blog_api:postController');

const { Post } = require('../models');
const { PostQueryValidator } = require('../validators/Post');

/**
 * User methods
 */


const addPost = (req, res) => {
  req.body.userId = req.user.id;
  Post.create(req.body)
    .then((post) => {
      res.status(201).json(post.get());
    })
    .catch((err) => {
      debug(`Error while post creation : ${err}`);
      res.status(400).send(err);
    });
};

const getPosts = (req, res) => {
  const { error } = PostQueryValidator.validate(req.query);
  if (error) return res.status(400).json(error);

  Post.findAll({
    where: req.query,
  })
    .then((posts) => res.json(posts))
    .catch((err) => {
      debug(err);
      return res.status(500).json({ details: 'There was an error!' });
    });
};

const getPostById = (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((post) => {
    if (!post) return res.status(404).json({ details: 'post not found.' });
    return res.json(post.get());
  }).catch((err) => {
    debug(err);
    return res.status(500).json({ details: 'There was an error!' });
  });
};

const updatePost = (req, res) => {
  Post.update(req.body, {
    where: { id: req.params.id },
  }).then((updated) => {
    if (updated[0] === 0) return res.status(404).send({ details: 'post not found' });
    return res.json();
  }).catch((err) => {
    debug(err);
    return res.status(500).json({ details: 'There was an error!' });
  });
};

const deletePost = (req, res) => {
  Post.destroy({
    where: { id: req.params.id },
  }).then((data) => {
    if (!data) return res.status(404).send({ details: 'post not found' });
    return res.status(204).json();
  }).catch((err) => {
    debug(err);
    res.status(500).json(err);
  });
};

module.exports = {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
