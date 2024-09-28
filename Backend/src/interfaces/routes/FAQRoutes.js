const express = require("express");
const FAQController = require("../controllers/FAQController");

const router = express.Router();

router.get("/FAQs", FAQController.getAllFAQ).post("/FAQs", FAQController.addQA);

router.patch("/FAQs/:id", FAQController.updateQA);

module.exports = router;
