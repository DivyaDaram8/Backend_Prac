import express, { urlencoded } from 'express';
const app = express();

import logger from './middlewares/logger.js';
import userRouter from './routes/pracUser.routes.js';
import taskRouter from './routes/task.routes.js'
import errorHandler from './middlewares/errorHandler.js'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.use(errorHandler);

export default app;