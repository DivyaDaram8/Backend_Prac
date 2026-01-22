import express from 'express';
const router = express.Router();
import protect from '../middlewares/authMiddleware.js'

import {getTasks, addTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'

router.get("/getTasks", protect, getTasks);
router.route("/postTask").post(protect, addTask);
router.route("/updateTask/:id").put(protect, updateTask)
router.route("/deleteTask/:id").delete(protect, deleteTask);


// this is also fine one route 2 methods
// router.route("/:id").put(updateTask).delete(deleteTask);


export default router;