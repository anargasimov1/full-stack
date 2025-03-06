const service = require('../service/UserService');
const user = require('../models/UserModels');
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserController {
  async registration(req, res, next) {
    try {
      const { name, surname, password, email, role } = req.body;
      const newUser = await user.findOne({ email });
      if (newUser)
        res.json({ message: "user already is registered" })
      const token = await service.register(name, surname, password, email, role);
      res.send(token);
    } catch (error) {
      res.json({ message: error.message })
    }
  }


  async getAllUsers(req, res) {
    try {
      const users = await service.getUsers();
      res.json(users)
    } catch (error) {
      res.json({ message: error.message })
    }
  }

  async UpDate(req, res) {
    try {
      const id = req.params.id;
      const user = req.body;
      const upDatedUser = await service.upDate(id, user);
      res.json(upDatedUser);
    } catch (error) {
      res.json({ message: error.message });
    }
  }

}

module.exports = new UserController();