// const User = require("../../model/userModel");
// const bcrypt = require("bcryptjs");

// exports.updateProfile = async (req, res) => {
//   try {
//     // // set the profile image path
//     // const url = req.protocol + "://" + req.get("host");
//     // // const { destination, originalname } = req.file;
//     // let profileImage = url + "/" + req.file.filename;
//     console.log(req.file);

//     // destructure..
//     const { _id, firstname, lastname, accountname, password, DOB } = req.body;

//     const existingUser = await User.findOne({ accountname: accountname });
//     if (existingUser && existingUser._id.toString() !== _id) {
//       return res.status(400).json({
//         message: "Account name already taken. Please choose a different one.",
//       });
//     } else {
//       // if password is null
//       if (password === "null") {
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id },
//           {
//             firstname,
//             lastname,
//             accountname,
//             DOB,
//             profileImage,
//           },
//           { new: true }
//         );

//         if (!updatedUser) {
//           return res.status(404).json({
//             message: "User not found",
//           });
//         }

//         return res.status(200).json({
//           data: updatedUser,
//           message: "Update successfully",
//         });
//       } else {
//         //
//         // validate the password
//         const passwordValidation =
//           /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordValidation.test(password)) {
//           return res.status(400).json({
//             message: "password must be in proper pattern",
//           });
//         }

//         // hash the password
//         const salt = await bcrypt.genSalt(10);
//         const HashPassword = await bcrypt.hash(password, salt);

//         // update the user profile
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id },
//           {
//             firstname,
//             lastname,
//             accountname,
//             DOB,
//             profileImage,
//             password: HashPassword,
//           },
//           { new: true } // This option will make sure the updated document is returned
//         );

//         if (!updatedUser) {
//           return res.status(404).json({
//             message: "User not found",
//           });
//         }

//         return res.status(200).json({
//           data: updatedUser,
//           message: "Update successfully",
//         });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: "Invalid response -----",
//     });
//   }
// };

exports.updateProfile = async (req, res) => {
  try {
    // const data = req.file && {
    //   photo: { publicId: req.file.filename, url: req.file.path },
    // };
    console.log(json.stringify(data));
  } catch (error) {
    return res.status(500).json({
      message: "Invalid response -----",
    });
  }
};
