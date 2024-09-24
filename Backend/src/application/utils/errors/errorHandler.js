const validationErrorHandler = require("./validationError");

const errorHandler = (err) => {
  if (err.name === "ValidationError") err = validationErrorHandler(err);
  return err;
};

module.exports = errorHandler;
