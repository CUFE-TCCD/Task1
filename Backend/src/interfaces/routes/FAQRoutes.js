const express = require("express");
const FAQController = require("../controllers/FAQController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/FAQs")
  .get(FAQController.getAllFAQ)
  .post(authMiddleware, FAQController.addQA);

router.route("/FAQs/:id").patch(authMiddleware, FAQController.updateQA);

module.exports = router;
