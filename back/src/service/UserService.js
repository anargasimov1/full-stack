const bcrypt = require('bcrypt');
const user = require('../models/UserModels');
const userDto = require('../dto/UserDto');
const TokenService = require('../service/TokenServise');
const userInfo = require('../dto/UserInfo');

class UserService {
    async register(name, surname, password, email, role) {

        try {
            const userName = await user.findOne({ email });
            if (userName) {
                return `Bu ${email} ilə atrıq qeydiyyatdan keçmisiz`, false;
            }

            const hashPassword = await bcrypt.hash(password, 8);
            const newUser = await user.create({ name, surname, password: hashPassword, email, role });

            const dto = new userDto(newUser);
            const token = TokenService.generateToken({ ...dto });

            await TokenService.saveToken(newUser, token);
            return "Uğurlu qeydiyyat", true;
        } catch (error) {
            console.log(error.message);
        }
    }
    async getUsers() {
        try {
            const allUsers = await user.find();
            return allUsers;
        } catch (err) {
            console.log(err);
        }
    }

    async findUserById(id) {
        const user_info = await user.findById({ _id: id });
        if (user_info) {
            const dto = new userInfo(user_info);
            return dto;
        }

    }

    async upDate(id, newuser) {
        try {
            const upDateUser = await user.findByIdAndUpdate(id, newuser);
            return upDateUser || null;
        } catch (error) {
            console.log(err);
        }
    }

    async login(email, password) {
        try {
            const exsits = await user.findOne({ email })
            if (exsits) {
                const isMacth = await bcrypt.compare(password, exsits.password)
                if (isMacth) {
                    const Dto = new userDto(exsits);
                    const token = TokenService.generateToken({ ...Dto });
                    const saveToken = await TokenService.saveToken(exsits, token);

                    return { token: saveToken, id: Dto.id };
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        } catch (error) {
            console.log(error)
        }

    }

    async addWishlist(id, blogId) {
        try {
            const exsits = await user.findById(id);
            if (!exsits) return "not found";

            if (!exsits.fovarites.includes(blogId)) {
                exsits.fovarites.push(blogId);
                exsits.save();
                return exsits.fovarites
            }
            else {
                return "atiq elave olunub"
            }
        } catch (error) {
            console.log(error);
        }

    }

    async findFovarites(id) {
        try {
            const exsits = await user.findById(id);
            if (!exsits) return "not found"
            return exsits.fovarites;

        } catch (error) {
            console.log(error);
        }

    }

    async deleteUser(id) {
        try {
            await user.findByIdAndDelete(id);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new UserService();