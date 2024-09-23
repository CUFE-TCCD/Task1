const validationErrorHandler = (err) => {
  err.statusCode = 400;
  err.isOperational = true;
  return err;
};

module.exports = validationErrorHandler;
