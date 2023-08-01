// const Post = require("../../model/myFeed");
// const { sendResponse } = require("../../utils/sendResponse");
// const {
//   handleImageUpload,
//   handleVideoUpload,
//   handleAudioUpload,
//   handlePdfUpload,
//   handleDocumentUpload,
// } = require("../../utils/cloudinaryUtils");

// exports.myFeed = async (req, res) => {
//   try {
//     console.log(req.files);
//     console.log(req.body);

//     // Check if req.files exist and are not empty
//     if (req.files && req.files.length > 0) {
//       const cloudinaryUrls = [];

//       // Loop through each file and upload it to Cloudinary
//       for (const file of req.files) {
//         let imageData, videoData, audioData, pdfData, documentData;

//         imageData = await handleImageUpload(file);
//         videoData = await handleVideoUpload(file);
//         audioData = await handleAudioUpload(file);
//         pdfData = await handlePdfUpload(file);
//         documentData = await handleDocumentUpload(file);

//         if (imageData) {
//           cloudinaryUrls.push({ image: imageData.url });
//         }
//         if (videoData) {
//           cloudinaryUrls.push({ video: videoData.url });
//         }
//         if (audioData) {
//           cloudinaryUrls.push({ audio: audioData.url });
//         }
//         if (pdfData) {
//           cloudinaryUrls.push({ pdf: pdfData.url });
//         }
//         if (documentData) {
//           cloudinaryUrls.push({ doc: documentData.url });
//         }
//       }

//       const images = cloudinaryUrls.filter((item) => item.image);
//       const videos = cloudinaryUrls.filter((item) => item.video);
//       const pdf = cloudinaryUrls.filter((item) => item.pdf);

//       console.log(cloudinaryUrls);
//       // console.log(videos);
//       // console.log(pdf);
//       sendResponse(200, "Successfully Post", res);
//     }
//   } catch (error) {
//     sendResponse(500, "Post Failed!", res);
//   }
// };

const MyFeedModel = require("../../model/myFeed");
const { sendResponse } = require("../../utils/sendResponse");
const {
  HandleImage,
  handleImageUpload,
  handleVideoUpload,
  handleAudioUpload,
  handlePdfUpload,
  handleDocumentUpload,
} = require("../../utils/cloudinaryUtils");

exports.createfeed = async (req, res) => {
  try {
    const { _id, caption } = req.body;

    // send post into the DB
    var Data = {
      userID: _id,
      caption,
    };

    // Check if req.files exist and are not empty
    if (req.files && req.files.length > 0) {
      const cloudinaryUrls = [];

      // Loop through each file and upload it to Cloudinary
      for (const file of req.files) {
        let videoData, audioData, pdfData, documentData, postImage;

        postImage = await HandleImage(file);
        videoData = await handleVideoUpload(file);
        audioData = await handleAudioUpload(file);
        pdfData = await handlePdfUpload(file);
        documentData = await handleDocumentUpload(file);

        if (postImage) {
          cloudinaryUrls.push(postImage.url);
        }
        if (videoData) {
          cloudinaryUrls.push(videoData.url);
        }
        if (audioData) {
          cloudinaryUrls.push(audioData.url);
        }
        if (pdfData) {
          cloudinaryUrls.push(pdfData.url);
        }
        if (documentData) {
          cloudinaryUrls.push(documentData.url);
        }
      }

      // const videos = cloudinaryUrls.filter((item) => item.video);
      // const pdf = cloudinaryUrls.filter((item) => item.pdf);
      // const post_Image = cloudinaryUrls.filter((item) => item.postImages);
      Data.media = cloudinaryUrls;

      const UserPost = await MyFeedModel.create({
        userID: Data.userID,
        caption: Data.caption,
        media: Data.media,
      });
      await UserPost.save();
      sendResponse(200, "Successfully Post", res);
      return;
    }

    // if file and content is empty throw an error
    if (req.files.length <= 0 && req.body.caption.length <= 0) {
      sendResponse(408, "Can't Empty Post", res);
      return;
    }

    const UserPost = await MyFeedModel.create({
      userID: Data.userID,
      caption: Data.caption,
      media: Data.media,
    });
    await UserPost.save();
    sendResponse(200, "Successfully Post", res);
    return;
  } catch (error) {
    sendResponse(500, "Post Failed!", res);
  }
};
