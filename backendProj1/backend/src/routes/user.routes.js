import express from 'express';
import {loginUser, logoutUser, registerUser} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;