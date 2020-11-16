import mongoose from "mongoose";

const GallerySchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
  },
  image:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

export default Gallery;
