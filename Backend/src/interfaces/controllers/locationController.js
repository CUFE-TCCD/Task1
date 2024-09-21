const container = require("../../container/container");
const LocationService = container.locationService;
const createLocation = async (req, res) => {
  try {
    const locationData = req.body;
    const newLocation = await LocationService.createLocation(locationData);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: "Failed to create location" });
  }
};

const updateLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    const updatedLocation = await LocationService.updateLocation(locationId, req.body);
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ error: `Failed to update location ${locationId}` });
  }
};

const deleteLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    await LocationService.deleteLocation(locationId);
    res.status(202).json({ success: true, message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to delete location ${locationId}` });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await LocationService.getAllLocations();
    res.status(201).json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to get locations" });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  deleteLocation,
  getAllLocations,
};
