const express = require("express");
const PostsModel = require("../Models/PostsModel");
const UserModel = require("../Models/UsersModel");
const PostRoute = express.Router();

PostRoute.get("/api/posts/:userId", async (req, res) => {
  const userId = req.params.userId;
  const post = await PostsModel.find({ userId });
  console.log("post", post);
  try {
    if (post.length > 0) {
      res.status(200).send(post);
    } else {
      res.status(500).send("No post");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

PostRoute.post("/api/post", async (req, res) => {
  const { userId, content } = req.body;
  const _id = userId;
  console.log("userId", userId, "content", content);

//   const user = await UserModel.findById({_id});

//   console.log("user", user.length===0, user);

  try {
    // if (user.length === 0) {
    //   res.status(403).send("User not found");
    // } else {
      const post = new PostsModel({ userId, content });
      await post.save();
      res.status(200).send("Post saved successfully");
    // }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

PostRoute.delete("/api/deletepost/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await PostsModel.find({ _id: postId });
  const userId_in_post = post[0].userId;
  const userId_in_req = req.body.userId;

  console.log("userId_in_post", userId_in_post);
  console.log("userId_in_req", userId_in_req);

  try {
    if (userId_in_post == userId_in_req) {
      await PostsModel.findByIdAndDelete({ _id: postId });
      res.status(200).send("Successful post deletion");
    } else {
      res.send("You are not athorized");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = PostRoute;
