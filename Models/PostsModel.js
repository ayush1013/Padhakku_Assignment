const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const PostsModel = mongoose.model("Posts", PostsSchema);

module.exports = PostsModel;
