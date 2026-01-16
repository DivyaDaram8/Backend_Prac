import express from 'express';

const app = express();

// to ensure 
app.use(express.json());

import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.route.js';

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
