import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// @route  GET api/news
// @desc to GET all get all news in blog
// @public to get all news

router.get("/", async (request, response) => {
  try {
    const posts = await Post.find().select("-admin").sort({
      date: -1,
    });
    response.json(posts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});


router.get("/lastest", async (request, response) => {
  try {
    const posts = await Post.find().select("-admin").sort({
      date: -1,
    }).limit(2);
    response.json(posts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});


// @route  GET api/posts
// @desc to GET one post by id for edit
// @acesss private to admins in dashboard

router.get("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id).select("-admin");
    response.json(post);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

export default router;
