const express = require("express");
const contactUsController = require("../controllers/contactUsController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/contact-us")
  .post(contactUsController.addQuestion)
  .get(authMiddleware, contactUsController.getAllQuestions);

module.exports = router;
