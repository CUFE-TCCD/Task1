const User=require('../../src/models/UserSchema');
const appError=require('../../utils/appError')
const createandsenttoken = (res, user) => {
    // here you need to add auth functionality and send the token to the user

    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  };

exports.signup = catchasync(async (req, res, next) => {
  const newuser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  createandsenttoken(res, newuser);
});

exports.login = catchasync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new appError("please enter email and password", 400));
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.matchPassword(password, user.password)))
    return next(new appError("wrong email or password", 401));

  createandsenttoken(res, user);
});
