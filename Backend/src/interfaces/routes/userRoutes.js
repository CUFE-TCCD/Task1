const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/users/count", authMiddleware, userController.getUsersCountByRole);
router.get("/users", authMiddleware, userController.getAllUsers);

module.exports = router;
