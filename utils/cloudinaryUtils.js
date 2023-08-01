const { uploadToCloudinary } = require("./cloudinary");

const handleImageUpload = async (file) => {
  if (file.mimetype.startsWith("image")) {
    return await uploadToCloudinary(file.path, "user-image");
  }
};

const handleVideoUpload = async (file) => {
  if (file.mimetype.startsWith("video")) {
    return await uploadToCloudinary(file.path, "user-video");
  }
};

const handleAudioUpload = async (file) => {
  if (file.mimetype.startsWith("audio")) {
    return await uploadToCloudinary(file.path, "user-audio");
  }
};

const handlePdfUpload = async (file) => {
  if (file.mimetype.startsWith("application/pdf")) {
    return await uploadToCloudinary(file.path, "user-pdf");
  }
};

const handleDocumentUpload = async (file) => {
  if (!file.mimetype.startsWith("image") &&
    !file.mimetype.startsWith("video") &&
    !file.mimetype.startsWith("audio") &&
    !file.mimetype.startsWith("application/pdf")) {
    return await uploadToCloudinary(file.path, "user-document");
  }
};

module.exports = {
  handleImageUpload,
  handleVideoUpload,
  handleAudioUpload,
  handlePdfUpload,
  handleDocumentUpload,
};
