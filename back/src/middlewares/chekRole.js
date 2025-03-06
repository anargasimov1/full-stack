const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Bu əməliyyatı yerinə yetirmək üçün icazəniz yoxdur" });
    }
    next();
  };
};

module.exports = checkRole;
