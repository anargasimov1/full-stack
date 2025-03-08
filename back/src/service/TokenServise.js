const jwt = require('jsonwebtoken');
const tokenModel = require('../models/tokenModel')

class TokenService {
    generateToken(payload) {

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "10d" });
        return token;
    }

    async saveToken(user, token) {
        const exist = await tokenModel.findOne({ user })

        if (exist) {
            const upDate = await tokenModel.findOneAndUpdate({ user, token });
            return upDate.token
        }
        else {
            const info = await tokenModel.create({ user, token });
            return info.token
        }
    }


}

module.exports = new TokenService();

// hələki access token genararte eledim refresh token gələcəkdə
// həll edərəm vaxt məhdiyyəti ilə əlaqədar