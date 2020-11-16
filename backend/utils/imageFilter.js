const imageFilter = (request, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
    cb(null, false);
  } else {
    cb(null, true);
  }
};


export default imageFilter;