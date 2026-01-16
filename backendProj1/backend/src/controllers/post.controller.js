import mongoose from "mongoose";
import Posts from "../models/post.model.js";

// @desc Adding a post
// @route POST /createPost
export const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({ message: "Enter all the required fields" });
    }
    const post = await Posts.create({
      name,
      description,
      age,
    });
    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// @desc Fetching a post
// @route GET /getPost

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// @desc Updating a post
// @route PUT /updatePost

export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    }

    // validate body
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided to update",
      });
    }

    const allowedUpdates = ["name", "description", "age"];
    const updates = {};

    for (let key of allowedUpdates) {
      if (req.body[key] !== undefined) {
        updates[key] = req.body[key];
      }
    }
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update",
      });
    }

    const post = await Posts.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    } else {
      return res.status(200).json({
        message: "Post updated successfully",
        post,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// @desc Delete a post
// @route DELETE /deletePost

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    }

    const post = await Posts.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({
        message: "Post does not exist",
      });
    }
    res.status(200).json({
      message: "Post deleted successfully",
      post,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
