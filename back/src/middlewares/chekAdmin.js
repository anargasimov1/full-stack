const userModel = require('../models/UserModels')
const checkadmin = (role) => {
    return async (req, res, next) => {
        const email = req.body.email;
        const user = await userModel.findOne({ email })
        if (user) {
            if (user.role === role) {
                next();
            }
            else {
                res.status(403).json({ message: "siz admin deyilsiz" });
                next();
            }
        }



    };
};

module.exports = checkadmin;