const service = require('../service/UserService');

class UserController {
  async registration(req, res) {
    try {
      const { name, surname, password, email, role } = req.body;
      const message = await service.register(name, surname, password, email, role);
      if (message) {
        res.status(200).json({ message: "ugurlu" })
      }
      else {
        res.status(400).json({ message: "sehv oldu" })
      }


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

  async findUserById(req, res) {
    const id = req.params.id;
    const user = await service.findUserById(id)
    res.json(user);

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

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await service.login(email, password);
      if (token)
        res.json(token)
      else res.status(401).json("Istifdeci adi ve ya parol sehvdir")
    } catch (error) {
      console.log(error);
    }
  }

  async addFovarites(req, res) {
    const id = req.body.id;
    const blogId = req.params.id;
    try {
      const message = await service.addWishlist(id, blogId);
      res.json({ message })
    } catch (error) {
      console.log(error)
    }
  }

  async findAllFovarites(req, res) {
    try {
      const id = req.params.id
      const fovarites = await service.findFovarites(id);
      res.json({ fovarites })
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      await service.deleteUser(id);
      res.json({ message: "deleted" })
    } catch (error) {
      res.status(401).json({ message: "not deleted" })
    }
  }


}

module.exports = new UserController();