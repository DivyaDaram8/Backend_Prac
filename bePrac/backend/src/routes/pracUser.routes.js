import express from 'express';
const router = express.Router();
import { registerUser, loginUser, changePassword, getMe } from '../controllers/pracUser.controller.js';
import protect from '../middlewares/authMiddleware.js';

router.post("/addUser", registerUser);
router.route("/login").post(loginUser);
router.post("/changePswd", changePassword);
router.get("/getMe",protect, getMe);

export default router;