const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleValidation = require("../middlewares/roleValidation");

router.get("/locations", authMiddleware, locationController.getAllLocations);

router.post(
  "/locations",
  authMiddleware,
  roleValidation("president", "admin"),
  locationController.createLocation
);

router.put(
  "/locations/:locationId",
  authMiddleware,
  roleValidation("president", "admin"),
  locationController.updateLocation
);

router.delete(
  "/locations/:locationId",
  authMiddleware,
  roleValidation("president", "admin"),
  locationController.deleteLocation
);

module.exports = router;
