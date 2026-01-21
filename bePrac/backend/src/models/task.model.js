import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'PracUser'
        },
        taskName: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ['completed', 'inProgress', 'notStarted'],
            default: 'notStarted',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;