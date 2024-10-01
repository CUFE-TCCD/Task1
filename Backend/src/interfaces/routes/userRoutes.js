const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleValidation = require("../middlewares/roleValidation");

router.get(
  "/users/count",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  userController.getUsersCountByRole
);

router.get(
  "/users",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  userController.getAllUsers
);

router.get("/users/:id", authMiddleware, userController.getUser);

module.exports = router;
