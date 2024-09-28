const express = require("express");
const FAQController = require("../controllers/FAQController");

const router = express.Router();

router
  .get("/FAQs", FAQController.getAllFAQ)
  .post("/FAQs", FAQController.addQuestion);

router.patch("/FAQs/:id", FAQController.updateAnswer);

module.exports = router;
