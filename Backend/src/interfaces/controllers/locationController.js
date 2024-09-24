const container = require("../../container/container");
const LocationService = container.locationService;
const createLocation = async (req, res) => {
  try {
    const locationData = req.body;
    //console.log(locationData);
    if (!locationData.name) {
      throw new Error(
        "Invalid location please make sure that filed (name) is provided"
      );
    }
    if (!locationData.capacity || isNaN(parseInt(locationData.capacity))) {
      throw new Error(
        "Invalid location please make sure that filed (capacity) is provided and it is a number"
      );
    }
    if (!locationData.address) {
      throw new Error(
        "Invalid location please make sure that filed (address) is provided"
      );
    }

    const newLocation = await LocationService.createLocation(locationData);
    res.status(201).send("Location created successfully");
  } catch (error) {
    res.status(500).json({
      error: "Failed to create location",
      message: error.message,
    });
  }
};

const updateLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    const updatedLocation = await LocationService.updateLocation(
      locationId,
      req.body
    );
    if (!updatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.status(200).send("Location updated successfully");
  } catch (error) {
    res.status(500).json({
      error: `Failed to update location ${locationId}`,
      message: error.message,
    });
  }
};

const deleteLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    const deleteedLocation = await LocationService.deleteLocation(locationId);
    res
      .status(202)
      .json({ success: true, message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: `Failed to delete location ${locationId}`,
      message: error.message,
    });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await LocationService.getAllLocations();
    res.status(201).json({ status: "sucess", data: locations });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: "Failed to get locations",
      message: error.message,
    });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  deleteLocation,
  getAllLocations,
};
