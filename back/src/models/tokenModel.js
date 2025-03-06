const { model, Schema } = require('mongoose');


const tokens = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    token: { type: String, required: true }
})

module.exports = model("tokens", tokens);