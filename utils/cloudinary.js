// const config = require("config");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "hustle",
  api_key: "528212988626273",
  api_secret: "KPkkWMS2Ld5A0TJsUredNQcLkVE",
});

//cloudinary storage instantion
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "BOOK_TREKKER/MY_PRODUCTS",
  },
});

//multer file filter (only images are allowed)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new AppError("Only .png, .jpg and .jpeg format allowed!", 400));
  }
};

//file size limit to 1MB
const maxSize = 1 * 1024 * 1024;
const limits = { fileSize: maxSize };

exports.multerOptions = {
  storage: storage,
  fileFilter,
  limits,
};
