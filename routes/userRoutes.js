const express = require("express");
const router = express.Router();

const { updateUser, getUser, userFeed } = require("../controllers");
const upload = require("../utils/Upload");

router.put("/userUpdate", upload.single("profilePic"), updateUser);
router.get("/userDetails/:accountName", getUser);
router.get("/userFeed/:userID", userFeed);
module.exports = router;
