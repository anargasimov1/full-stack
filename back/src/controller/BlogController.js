const BlogService = require('../service/BlogService');
const jwt = require('jsonwebtoken');

class BlogConrtroller {
    async createBlog(req, res) {
        const { title, description, img } = req.body;
        const userId = req.params.id;
        const blog = await BlogService.postBlog(title, description, img, userId);
        return res.json(blog);
    }

    async upDateBlog(req, res) {
        try {
            const { title, description, img } = req.body;
            const id = req.params.id;
            const upDated = await BlogService.upDateBlog(title, description, img, id);
            res.json(upDated);
        } catch (error) {
            console.log(error.message);
        }
    }
    async deleteBlog(req, res) {
        try {
            const id = req.params.id;
            const message = await BlogService.deleteBlog(id);
            res.json(message);
        } catch (error) {
            console.log(error.message)
        }

    }
    async allBlogs(req, res) {
        try {
            const allBlogs = await BlogService.allBlogs();
            res.json(allBlogs)
        } catch (error) {
            res.send("nese duz olmadi");
        }
    }

}

module.exports = new BlogConrtroller();