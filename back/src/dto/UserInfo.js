module.exports = class User_info {
    name;
    surname;
    email;
    id;

    constructor(user) {
        this.id = user._id;
        this.name = user.name;
        this.surname = user.surname;
        this.email = user.email;
    }
}