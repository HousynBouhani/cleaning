import express from "express";
import { check, validationResult } from "express-validator";
import authMiddleware from "../middleware/auh.js";
import Post from "../models/Post.js";
import multer from "multer";
import storage from "../utils/imageStorage.js";
import imageFilter from "../utils/imageFilter.js";


const upload = multer({ storage: storage ,fileFilter:imageFilter});

const router = express.Router();

// @route  GET api/posts
// @desc to GET all posts in dashboard
// @acesss private to admins in dashboard

router.get("/", authMiddleware, async (request, response) => {
  try {
    const posts = await Post.find({ admin: request.admin.id })
      .select("-admin")
      .sort({
        date: -1,
      });
    response.json(posts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

// @route  GET api/posts
// @desc to GET one post by id for edit
// @acesss private to admins in dashboard

router.get("/:id", authMiddleware, async (request, response) => {
  try {
    const post = await Post.findById(request.params.id).select("-admin");
    response.json(post);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

// @route  POST api/posts
// @desc to add new posts as a admin
// @acesss private to admins

const validators = [
  check("title", "Bitte fügen Sie einen Titel hinzu").not().isEmpty(),
  check("content", "Bitte geben Sie Ihren Blog-Inhalt ein").not().isEmpty(),
];

router.post(
  "/",
  [authMiddleware,upload.single("image"), validators ],
  async (request, response) => {
    const errors = validationResult(request);
    //if there is erros send them in a response
    if (!errors.isEmpty()) {
      response.status(400).json({ errors: errors.array() });
      return;
    }

    if (!request.file) {
      response.status(400).json({ msg: [{ msg: "Bitte geben Sie ein Bild ein!" }]});
      return;
    }
    if (!request.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      response.status(400).json({ msg: [{ msg: "Es sind nur Bilddateien erlaubt!"}]})
      return;
    }

    // get post details from request
    const { title, content } = request.body;
    const image = request.file.path.replace(/\\/g, "/");
    try {
      const newPost = new Post({
        image,
        title,
        content,
        admin: request.admin.id,
      });

      const post = await newPost.save();
      response.json(post);
    } catch (error) {
      console.error(error.message);
      response.status(500).send("server error");
    }
  }
);

// @route  PUT api/posts
// @desc to UPDATE posts as a admin
// @acesss private to admins

router.put(
  "/:id",
  [authMiddleware,upload.single("image"), validators],
  async (request, response) => {
    const errors = validationResult(request);
    //if there is erros send them in a response
    if (!errors.isEmpty()) {
      response.status(400).json({ errors: errors.array() });
      return;
    }
    
    if (!request.file) {
      response.status(400).json({ msg: [{ msg: "Bitte geben Sie ein Bild ein!" }]});
      return;
    }
    if (!request.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      response.status(400).json({ msg: [{ msg: "Es sind nur Bilddateien erlaubt!"}]})
      return;
    }


    // get post details from request
    const { title, content } = request.body;
    const image = request.file.path;
    const post = {};
    //build post object
    if (title) post.title = title;
    if (content) post.content = content;
    if (image) post.image = image;
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        request.params.id,
        { $set: post },
        { new: true }
      );
      response.json(updatedPost);
    } catch (error) {
      console.error(error.message);
      response.status(500).send("server error");
    }
  }
);

// @route  DELETE api/posts
// @desc to DELETE posts as a admin
// @acesss private to admins

router.delete("/:id", authMiddleware, async (request, response) => {
  try {
    await Post.findByIdAndRemove(request.params.id);
    response.json({ msg: "post removed" });
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

export default router;
