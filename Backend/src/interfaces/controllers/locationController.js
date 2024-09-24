const container = require("../../container/servicesContainer");
const LocationService = container.resolve('LocationService');

const createLocation = async (req, res) => {
  try {
    const locationData = req.body;

    if (!locationData.name) {
      throw new Error(
        "Invalid location please make sure that filed (name) is provided"
      );
    }
    if (!locationData.capacity || !isNumberObject(locationData.capacity)) {
      throw new Error(
        "Invalid location please make sure that filed (capacity) is provided and it is a number"
      );
    }
    if (!locationData.location) {
      throw new Error(
        "Invalid location please make sure that filed (location) is provided"
      );
    }

    const newLocation = await LocationService.createLocation(locationData);
    res.status(201).json({ status: "success", data: newLocation });
  } catch (error) {
    res.status(500).json({
      status: "failed",
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
      return res
        .status(404)
        .json({ status: "failed", message: "Location not found" });
    }
    res.status(200).json({
      status: "success",
      data: updatedLocation,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: `Failed to update location ${locationId}`,
      message: error.message,
    });
  }
};

const deleteLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    const deleteedLocation = await LocationService.deleteLocation(locationId);
    res.status(202).json({ status: "sucess", data: deleteLocation });
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
