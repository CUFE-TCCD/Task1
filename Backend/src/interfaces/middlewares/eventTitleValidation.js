const titleValidation = (req, res, next) => {
  const { title } = req.body;

  const validator = /^[A-Za-z\s]+$/;
  if (!validator.test(title)) {
    const error = new Error("The name must contain characters only");
    error.statusCode = 400;
    error.isOperational = true;
    next(error);
  }
  next();
};

module.exports = titleValidation;
