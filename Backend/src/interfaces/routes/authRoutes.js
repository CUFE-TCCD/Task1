const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/auth/login", authController.login);
router.post("/auth/signup", authController.signup);
router.post("/auth/reset", authController.sendResetToken);
router.post("/auth/reset/:token", authController.resetPassword);
router.post("/auth/change", authMiddleware, authController.changePassword);

module.exports = router;
