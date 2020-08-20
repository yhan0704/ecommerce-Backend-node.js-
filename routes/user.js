const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user.js");
const { userSingupValidator } = require('../validator')

router.post("/signup", userSingupValidator, signup);
router.post("/signin", userSingupValidator, signin);
router.post("/signout", userSingupValidator, signout);

module.exports = router;
