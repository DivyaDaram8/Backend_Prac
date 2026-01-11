import express from 'express';
import dotenv from 'dotenv';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js'; 
import notFound from './middleware/notFound.js';
import url from 'url';
import path from 'path';
const port = process.env.PORT || 8000;

dotenv.config();
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log('LISTENING ON PORT: ', port);
});
