import express from "express";
import Gallery from "../models/Gallery.js";
const router = express.Router();

// @route  GET api/photos
// @desc to GET all photos in dashboard
// @acesss private to admins in dashboard

router.get("/", async (request, response) => {
  try {
    const photos = await Gallery.find().select("-admin").sort({
      date: -1,
    });
    response.json(photos);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

export default router;
