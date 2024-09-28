module.exports = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role != "president") {
    return res.status(401).json({ error: "Access denied, admins only" });
  }
  next();
};