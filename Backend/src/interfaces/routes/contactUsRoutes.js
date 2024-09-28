const express = require("express");
const contactUsController = require("../controllers/contactUsController");

const router = express.Router();

router
  .route("/contact-us")
  .post(contactUsController.addQuestion)
  .get(contactUsController.getAllQuestions);

module.exports = router;
