const Post = require("../../model/myFeed");
const { sendResponse } = require("../../utils/sendResponse");
const {
  handleImageUpload,
  handleVideoUpload,
  handleAudioUpload,
  handlePdfUpload,
  handleDocumentUpload,
} = require("../../utils/cloudinaryUtils");

exports.myFeed = async (req, res) => {
  try {
    // Check if req.files exist and are not empty
    if (req.files && req.files.length > 0) {
      const cloudinaryUrls = [];

      // Loop through each file and upload it to Cloudinary
      for (const file of req.files) {
        let imageData, videoData, audioData, pdfData, documentData;

        imageData = await handleImageUpload(file);
        videoData = await handleVideoUpload(file);
        audioData = await handleAudioUpload(file);
        pdfData = await handlePdfUpload(file);
        documentData = await handleDocumentUpload(file);

        if (imageData) {
          cloudinaryUrls.push({ image: imageData.url });
        }
        if (videoData) {
          cloudinaryUrls.push({ video: videoData.url });
        }
        if (audioData) {
          cloudinaryUrls.push({ audio: audioData.url });
        }
        if (pdfData) {
          cloudinaryUrls.push({ pdf: pdfData.url });
        }
        if (documentData) {
          cloudinaryUrls.push({ doc: documentData.url });
        }
      }

      const images = cloudinaryUrls.filter((item) => item.image);
      const videos = cloudinaryUrls.filter((item) => item.video);
      const pdf = cloudinaryUrls.filter((item) => item.pdf);

      console.log(cloudinaryUrls);
      // console.log(videos);
      // console.log(pdf);
      sendResponse(200, "Successfully Post", res);
    }
  } catch (error) {
    sendResponse(500, "Post Failed!", res);
  }
};
