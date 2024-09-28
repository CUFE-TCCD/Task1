const Container = require("./container");
const Lifetime = require("./lifetimes");
const EventLocationRepository = require("../infrastructure/repositories/mongoose/eventLocationRepository");
const EventLocationService = require("../application/services/eventLocationService");
const EventRepository = require("../infrastructure/repositories/mongoose/eventRepository");
const EventService = require("../application/services/eventService");
const UserRepository = require("../infrastructure/repositories/mongoose/userRepository");
const UserService = require("../application/services/userService");
const UserProfileRepository = require("../infrastructure/repositories/mongoose/userProfileRepository");
const UserProfileService = require("../application/services/userProfileService");
const FeedbackRepository = require("../infrastructure/repositories/mongoose/feedbackRepository");
const FeedbackService = require("../application/services/feedbackService");
const AuthService = require("../application/services/authService");
const LocationRepository = require("../infrastructure/repositories/mongoose/locationRepository");
const LocationService = require("../application/services/locationService");
const ApplicationRepository = require("../infrastructure/repositories/mongoose/applicationRepository");
const ApplicationService = require("../application/services/applicationService");

const container = new Container();

container.register(
  "EventLocationRepository",
  EventLocationRepository,
  Lifetime.Scoped
);
container.register("EventRepository", EventRepository, Lifetime.Scoped);
container.register("UserRepository", UserRepository, Lifetime.Scoped);
container.register(
  "UserProfileRepository",
  UserProfileRepository,
  Lifetime.Scoped
);
container.register("FeedbackRepository", FeedbackRepository, Lifetime.Scoped);
container.register("LocationRepository", LocationRepository, Lifetime.Scoped);
container.register(
  "ApplicationRepository",
  ApplicationRepository,
  Lifetime.Scoped
);

container.register(
  "EventLocationService",
  EventLocationService,
  Lifetime.Scoped,
  ["EventLocationRepository"]
);

container.register("EventService", EventService, Lifetime.Scoped, [
  "EventRepository",
  "ApplicationRepository",
]);

container.register("UserService", UserService, Lifetime.Scoped, [
  "UserRepository",
]);

container.register("UserProfileService", UserProfileService, Lifetime.Scoped, [
  "UserProfileRepository",
]);

container.register("FeedbackService", FeedbackService, Lifetime.Scoped, [
  "FeedbackRepository",
]);

container.register("AuthService", AuthService, Lifetime.Scoped, [
  "UserRepository",
  "UserProfileRepository",
]);

container.register("LocationService", LocationService, Lifetime.Scoped, [
  "LocationRepository",
]);

container.register("ApplicationService", ApplicationService, Lifetime.Scoped, [
  "ApplicationRepository",
]);

module.exports = container;
