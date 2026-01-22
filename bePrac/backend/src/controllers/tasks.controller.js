import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Task from '../models/task.model.js';


// @desc Fetches all the tasks
// @route GET /getTasks
export const getTasks = asyncHandler(
    async(req, res) => {
        const tasks = await Task.find({userId: req.user.id});
        return res.status(200).json({message: "Fetched tasks successfully", tasks});
    }
);

// @desc Create the task
// @route POST /postTask
export const addTask = asyncHandler(
    async(req, res) => {
        const {taskName, status} = req.body;
        // !status is not added because status is set by default
        if(!taskName){
            throw new ApiError(400, "Must enter all the data");
        }
        const task = await Task.create({
            taskName, status, userId: req.user.id
        })
        return res.status(201).json({message: "Task created successfully", task});
    }
);

// @desc update the task
// @route PUT /postTask
export const updateTask = asyncHandler(
    async(req, res) => {
        const task = await Task.findById(req.params.id)
        if(!task){
            throw new ApiError(404, "Task not found");
        }

        // This already handles in authMiddleware
        // if(!req.user){
        //     throw new ApiError(401, "User Not Found");
        // }
        if(task.userId.toString() !== req.user.id){
            throw new ApiError(403, "User Not authorized to delete task");
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        return res.status(200).json({message: "Task updated successfully", updatedTask});
    }
);


// @desc delete the task
// @route POST /postTask
export const deleteTask = asyncHandler(
    async(req, res) => {
        const task = await Task.findById(req.params.id);
        if(!task){
            throw new ApiError(404, 'Task not found');
        }
        // const user = req.user;
        // if(!user){
        //     throw new ApiError(401, "User not found");
        // }
        if(task.userId.toString() !== req.user.id){
            throw new ApiError(403, "user not authorized");
        }
        await task.deleteOne();
        return res.status(200).json({message: "Task deleted successfully", task});
    }
);


