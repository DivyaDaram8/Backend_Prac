import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../controllers/post.controller.js';
const router = express.Router();

router.post("/addPost", createPost);
router.get("/getPosts", getPosts);
router.put("/update/:id", updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;
