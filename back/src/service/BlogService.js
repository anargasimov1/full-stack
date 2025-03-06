const BlogModel = require('../models/blogModel')

class BlogService {

    async postBlog(title, description, img, author) {

        try {
            const blog = BlogModel.create({ title, description, img, author });
            return blog;
        } catch (error) {
            console.log(error)
        }

    }

    async upDateBlog(title, description, img, id) {
        try {
            const newBlog = { title, description, img };
            await BlogModel.findByIdAndUpdate(id, newBlog);
            return await BlogModel.findById(id);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteBlog(id) {
        try {
            const deleted = await BlogModel.findById(id);
            if (deleted) {
                await BlogModel.findByIdAndDelete(id); // burdada silme mentigini basqa curde etmek olar meselen status vermek ve silindikde sadece deatkiv elemek birdefelik bazadan silmemek
            }
            else {
                return { message: "blog tapilmadi" }
            }
            return {
                message: "blog silindi"
            }
        } catch (error) {
            console.log(e) // eslinde butun errorlar middleware ile idare olunmalidir. sadece bele yazdim telesik
        }
    }

    async allBlogs() {
        try {
            const allBlogs = BlogModel.find().populate("author", "name surname -_id").lean();
            return allBlogs; // burada countDocuments() edim butun sayida bildirmek olar fronta ve limit vermek .skip().limit()
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new BlogService();