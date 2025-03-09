const blogController = require('../controller/BlogController');
const Router = require('express').Router;
const { authMiddleware } = require('../middlewares/AuthMiddleware')

const blogRouter = new Router();


blogRouter.post('/blogs/create/:id', authMiddleware, blogController.createBlog);
blogRouter.put('/blogs/update/:id', authMiddleware, blogController.upDateBlog);
blogRouter.delete('/blogs/delete/:id', authMiddleware, blogController.deleteBlog);
blogRouter.get('/blogs/allblogs', blogController.allBlogs)

module.exports = blogRouter;
