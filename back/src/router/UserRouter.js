const Router = require('express').Router
const controller = require('../controller/UserController');
const { authMiddleware } = require('../middlewares/AuthMiddleware');
const chekRole = require('../middlewares/chekRole');
const checkPersmission = require('../middlewares/chekPermission');
const checkadmin = require('../middlewares/chekAdmin')


const router = new Router();


router.post("/auth/register", controller.registration);
router.get('/auth/all', authMiddleware, chekRole(["admin"]), controller.getAllUsers);
router.put('/auth/update/:id', authMiddleware, checkPersmission(), controller.UpDate);
router.post('/auth/login', controller.login);
router.get('/auth/id/:id', authMiddleware, controller.findUserById);
router.post('/auth/fovarites/:id', authMiddleware, controller.addFovarites);
router.get('/auth/fovarites/:id', controller.findAllFovarites);
router.post('/auth/admin', checkadmin('admin'), controller.login);
router.delete('/auth/delete/:id', controller.deleteUser)

module.exports = router;