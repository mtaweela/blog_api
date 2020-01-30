const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(403).json({
      details: 'you do not have permissions.',
    });
    return;
  }
  next();
};

module.exports = {
  isAdmin,
};
