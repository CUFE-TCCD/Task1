const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

router.put("/admin/members", authMiddleware, isAdmin, userController.changeRole);


module.exports = router;
