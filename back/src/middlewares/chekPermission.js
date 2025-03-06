const chekPermission = () => {
    return (req, res, next) => {
        if ( req.user.id.includes(req.param.id)) {
            return res.status(403).json({ success: false, message: "Bu əməliyyatı yerinə yetirmək üçün icazəniz yoxdur" });
        }
        next();
    }
}

module.exports = chekPermission;