const express = require("express");
const router = express.Router();

// Controller's
const { signUp, signIn } = require("./myRoutes");

// Routes...
router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
