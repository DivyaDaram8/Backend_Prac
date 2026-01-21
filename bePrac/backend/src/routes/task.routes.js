import express from 'express';
const router = express.Router();

import {getTasks, addTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'

router.get("/getTasks", getTasks);
router.route("/postTask").post(addTask);
router.route("/updateTask/:id").put(updateTask)
router.route("/deleteTask/:id").delete(deleteTask);


// this is also fine one route 2 methods
// router.route("/:id").put(updateTask).delete(deleteTask);


export default router;