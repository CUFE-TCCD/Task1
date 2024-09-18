const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/locations", authMiddleware, locationController.getAllLocations);
router.post("/locations", authMiddleware, locationController.createLocation);
router.put("/locations/:locationId", authMiddleware, locationController.updateLocation);
router.delete("/locations/:locationId", authMiddleware, locationController.deleteLocation);

module.exports = router;
