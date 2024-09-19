const EventLocationRepository = require("./infrastructure/repositories/mongoose/eventLocationRepository");
const EventLocationService = require("./application/services/eventLocationService");
const EventRepository = require("./infrastructure/repositories/mongoose/eventRepository");
const EventService = require("./application/services/eventService");
const UserRepository = require("./infrastructure/repositories/mongoose/userRepository");
const UserService = require("./application/services/userService");
const UserProfileRepository = require("./infrastructure/repositories/mongoose/userProfileRepository");
const UserProfileService = require("./application/services/userProfileService");
const FeedbackRepository = require("./infrastructure/repositories/mongoose/feedbackRepository");
const FeedbackService = require("./application/services/feedbackService");
const AuthService = require("./application/services/authService");
const LocationRepository = require("./infrastructure/repositories/mongoose/locationRepository");
const LocationService = require("./application/services/locationService");
const ApplicationRepository = require("./infrastructure/repositories/mongoose/applicationRepository");
const ApplicationService = require("./application/services/applicationService");

const container = {
  eventLocationService: new EventLocationService(new EventLocationRepository()),
  eventService: new EventService(new EventRepository()),
  userService: new UserService(new UserRepository()),
  userProfileService: new UserProfileService(new UserProfileRepository()),
  feedbackService: new FeedbackService(new FeedbackRepository()),
  authService: new AuthService(new UserRepository()),
  locationService: new LocationService(new LocationRepository()),
  applicationService: new ApplicationService(new ApplicationRepository()),
};

module.exports = container;
