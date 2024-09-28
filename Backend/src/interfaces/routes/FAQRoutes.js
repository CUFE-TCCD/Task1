const express = require("express");
const FAQController = require("../controllers/FAQController");

const router = express.Router();

router.route("/FAQs").get(FAQController.getAllFAQ).post(FAQController.addQA);

router.patch("/FAQs/:id", FAQController.updateQA);

module.exports = router;
