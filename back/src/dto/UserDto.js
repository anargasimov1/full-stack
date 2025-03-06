module.exports = class UserDto {
    id;
    email;
    role
    constructor(user) {
        this.id = user._id;
        this.email = user.email;
        this.role = user.role;
    }
}