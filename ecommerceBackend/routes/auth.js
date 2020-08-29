const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSingupValidator } = require("../validator");

router.post("/signup", userSingupValidator, signup);
router.post("/signin", userSingupValidator, signin);
router.get("/signout", userSingupValidator, signout);

// router.get("/hello", requireSignin, (req, res) => {
//   res.send("hello there");
// });

module.exports = router;
