const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dzfomaekt",
  api_key: "528212988626273",
  api_secret: "KPkkWMS2Ld5A0TJsUredNQcLkVE",
});

uploadToCloudinary = (path, folder) => {
  return cloudinary.v2.uploader
    .upload(path, {
      folder,
    })
    .then((data) => {
      return { url: data.url };
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { uploadToCloudinary };
