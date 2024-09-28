const roleValidation = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    
    if (role && roles.includes(role)) {
      return next();
    }
    const error = new Error("Forbidden");
    error.statusCode = 403;
    return next(error);
  };
};

module.exports = roleValidation;
