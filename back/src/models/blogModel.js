const { model, Schema } = require('mongoose');


const blogs = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "users" }
})

module.exports = model("blogs", blogs);