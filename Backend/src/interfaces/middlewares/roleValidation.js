const roleValidation = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (role && roles.includes(role)) {
      return next();
    }
    const error = new Error(
      "Forbidden. Your role doesn't have access to that route."
    );
    error.statusCode = 403;
    return next(error);
  };
};

module.exports = roleValidation;
