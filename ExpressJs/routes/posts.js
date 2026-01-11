import express from 'express';
const router = express.Router();
import {createPost, updatePost, deletePost, getPosts, getPost } from '../controllers/postController.js';


// get all posts
router.get('/', getPosts);


// get post by id
router.get('/:id', getPost );


//create new post
router.post('/', createPost);


// Update post
router.put('/:id', updatePost);

// delete post
router.delete('/:id', deletePost);

// module.exports = router;
export default router;