import express from 'express';
import {
    createMovie,
    createMultipleMovies,
    getAllMovies,
    getMovieById,
    iteratingMovies,
    updateMovieById,
    updateManyMoviesByCondition,
    deleteMovieById,
    deleteManyMoviesByCondition
} from './controllers/movieController.js';

import connectDB from './db/connectDB.js';

const app = express();
const port = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/movies';

// console.clear();
// used to clear the console
await connectDB(DB_URL);
app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
)

// await createMovie();
// await createMultipleMovies();
// await getAllMovies();
// await getMovieById("6958b2bf6733075617ba7366");
// await iteratingMovies();
// await updateMovieById("6958b2bf6733075617ba7366");
// await updateManyMoviesByCondition({ratings : { $lt: 9}}, {isActive: false});
// await deleteMovieById("6957c0b03987dbd9d795a689");
await deleteManyMoviesByCondition({ratings: {$lte: 3}});


// The above function calls are commented out to prevent automatic execution when the server starts.
// You can uncomment them one by one to test their functionality as needed.
// It is not recommended to run from server.js directly, recommended to use separate API routes for better control.

