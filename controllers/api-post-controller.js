const Post = require("../models/post");

const handleError = (res, err) => {
  res.status(500).send(err.message);
};

const getPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handleError(res, err));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

const createPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handleError(res, err));
};

const ubdatePost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text }, { new: true })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handleError(res, err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getPost,
  getPosts,
  createPost,
  ubdatePost,
  deletePost,
};
