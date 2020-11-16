import multer from "multer";

const storage = multer.diskStorage({
    destination: function (request, file, callBack)  {
      callBack(null, "./uploads/")
    },
    filename: function (request, file, callBack)  {
      const now = new Date().toISOString();
      const date = now.replace(/:/g, '-'); 
      callBack(null, date + file.originalname);
  
    },
  });
  
  
  
  

export default storage;