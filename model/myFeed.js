// const mongoose = require("mongoose");

// const myFeedSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//   },
//   userName: {
//     type: String,
//   },
//   userPicture: {
//     type: String,
//   },
//   PostTime: {
//     type: String,
//   },
//   media: {
//     type: String,
//   },
//   likes: {
//     type: Number,
//   },
//   comments: {
//     type: Array,
//   },
//   usersLikePost: {
//     type: Array,
//   },
// });

// module.exports = mongoose.model("Post", myFeedSchema);

// // models/post.js
// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     images: [
//       {
//           type: String,
//           required: true,
//         },
//
//     ],
//     videos: [
//       {
//         video: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//     audios: [
//       {
//         audio: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//     pdfs: [
//       {
//         pdf: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//     documents: [
//       {
//         doc: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;

const mongoose = require("mongoose");

const myFeedSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    caption: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
    },
    media: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", myFeedSchema);
