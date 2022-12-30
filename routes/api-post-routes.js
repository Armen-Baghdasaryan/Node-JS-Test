const express = require("express");
const {
  getPost,
  getPosts,
  createPost,
  ubdatePost,
  deletePost,
} = require("../controllers/api-post-controller");

const router = express.Router();

//Get All Posts
router.get("/api/posts", getPosts);
//Get Post By Id
router.get("/api/post/:id", getPost);
//Add New Post
router.post("/api/post", createPost);
//Delete Post
router.delete("/api/post/:id", deletePost);
//Ubdate Post
router.put("/api/post/:id", ubdatePost);

module.exports = router;
