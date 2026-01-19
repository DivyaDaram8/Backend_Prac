import express from 'express';
const router = express.Router();
import { registerUser, loginUser, changePassword } from '../controllers/pracUser.controller.js';

router.post("/addUser", registerUser);
router.route("/login").post(loginUser);
router.post("/changePswd", changePassword);

export default router;