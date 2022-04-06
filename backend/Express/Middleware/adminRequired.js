const adminRequired = (req, res, next) => {
  const { isAdmin } = req.payload;

  if (!isAdmin) {
    res.status(401).json({ success: false, message: "You aren't Authorized to Perform this Action" });
    return;
  }

  next();
};

export default adminRequired;
