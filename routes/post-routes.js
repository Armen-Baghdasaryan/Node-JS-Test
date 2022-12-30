const express = require("express");
const {
  getPost,
  getPosts,
  addPost,
  editPost,
  createPost,
  ubdatePost,
  deletePost,
} = require("../controllers/post-controller");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.get("/add-post", addPost);
router.get("/edit/:id", editPost);
router.post("/add-post", createPost);
router.put("/edit/:id", ubdatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
