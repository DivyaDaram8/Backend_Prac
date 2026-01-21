import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Task from '../models/task.model.js';


// @desc Fetches all the tasks
// @route GET /getTasks
export const getTasks = asyncHandler(
    async(req, res) => {
        const tasks = await Task.find();
        return res.statusCode(200).json({message: "Fetched tasks successfully", tasks});
    }
);

// @desc Create the task
// @route POST /postTask
export const addTask = asyncHandler(
    async(req, res) => {
        
        return res.statusCode(201).json({message: "Task created successfully", task});
    }
);

// @desc update the task
// @route PUT /postTask
export const updateTask = asyncHandler(
    async(req, res) => {
        
        return res.statusCode(201).json({message: "Task created successfully", task});
    }
);


// @desc delete the task
// @route POST /postTask
export const deleteTask = asyncHandler(
    async(req, res) => {
        
        return res.statusCode(201).json({message: "Task created successfully", task});
    }
);


