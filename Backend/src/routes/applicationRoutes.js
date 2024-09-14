const express = require("express");
const router = express.Router();
const Application = require("../models/ApplicationSchema");
const Event = require("../models/EventSchema")
const User = require("../models/UserSchema")

// Route to add an application
router.post("/applications", async (req, res) => {
  try {
    // TODO: create a new application
    const userId = req.user._id
    const { eventId } = req.body

    if (! await Event.findById(eventId)) {
      return res.status(404).send({
        success: false,
        message: "This event not exist"
      })
    }
    const application = await new Application({ userId, eventId }).save()

    return res.status(201).send({
      success: true,
      message: "Your application saved successfully",
      application
    })

  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error saving application"
    })
  }
});

// Route to update an application
router.put("/applications/:id", async (req, res) => {
  try {
    // TODO: update an application by id
    const { userId, eventId, status } = req.body

    const [application, user, event] = await Promise.all([
      Application.findById(req.params.id),
      User.findById(userId),
      Event.findById(eventId)
    ]);

    // Application not exist
    if (!application) {
      return res.status(404).send({
        success: false,
        message: "This application not exist"
      })
    }

    // User not exist
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "This user not exist"
      })
    }

    // Event not exist
    if (!event) {
      return res.status(404).send({
        success: false,
        message: "This event not exist"
      })
    }

    if (!Application.schema.path('role').options.enum.includes(status)) {
      return res.status(404).send({
        success: false,
        message: "Invalid status"
      })
    }

    application.userId = userId
    application.eventId = eventId
    application.status = status

    application.save()

    return res.status(200).send({
      success: true,
      message: "Your application saved successfully",
      application
    })
  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error updating application"
    })
  }
});

// Route to delete an application
router.delete("/applications/:id", async (req, res) => {
  // TODO: delete an application by id
  try {
    // Application not exist
    if (!await Application.findByIdAndDelete(req.params.id)) {
      return res.status(404).send({
        success: false,
        message: "This application not exist"
      })
    }

    return res.status(202).send({
      success: true,
      message: "Application deleted successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error deleting the request"
    })
  }
});

module.exports = router;
