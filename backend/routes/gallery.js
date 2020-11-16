import express from "express";
import authMiddleware from "../middleware/auh.js";
import Gallery from "../models/Gallery.js";
import multer from "multer";
import storage from "../utils/imageStorage.js";
import imageFilter from "../utils/imageFilter.js";



const upload = multer({ storage: storage ,fileFilter:imageFilter});

const router = express.Router();

// @route  GET api/photos
// @desc to GET all photos in dashboard
// @acesss private to admins in dashboard

router.get("/", authMiddleware, async (request, response) => {
  try {
    const photos = await Gallery.find({ admin: request.admin.id })
      .select("-admin")
      .sort({
        date: -1,
      });
    response.json(photos);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

// @route  POST api/gallery
// @desc to add new photo as a admin
// @acesss private to admins

  
  router.post(
    "/",
    [authMiddleware,upload.single("image")],
    async (request, response) => {
      if (!request.file) {
        response.status(400).json({ msg: [{ msg: "Bitte geben Sie ein Bild ein!" }]});
        return;
      }
      if (!request.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
        response.status(400).json({ msg: [{ msg: "Es sind nur Bilddateien erlaubt!"}]})
        return;
      }
  
      const image = request.file.path.replace(/\\/g, "/");
      try {
        const newPhoto = new Gallery({
          image,
          admin: request.admin.id,
        });
  
        const imagePost = await newPhoto.save();
        response.json(imagePost);
      } catch (error) {
        console.error(error.message);
        response.status(500).send("server error");
      }
    }
  );


  
// @route  DELETE api/gallery
// @desc to DELETE photo as a admin
// @acesss private to admins

router.delete("/:id", authMiddleware, async (request, response) => {
    try {
      await Gallery.findByIdAndRemove(request.params.id);
      response.json({ msg: "image removed" });
    } catch (error) {
      console.error(error.message);
      response.status(500).send("server error");
    }
  });


export default router;