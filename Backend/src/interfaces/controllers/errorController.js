const errorHandler = require("../../application/utils/errors/errorHandler");

const globalErrorHandler = (err, req, res, next) => {
  err = errorHandler(err);

  err.statusCode = err.statusCode || 500;
  err.status = err.statusCode.toString().startsWith("4") ? "fail" : "error";

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  }
};

module.exports = globalErrorHandler;
