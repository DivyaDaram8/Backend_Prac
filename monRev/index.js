import express from 'express';
import connectDB from './db/connectDB.js';

import {
    createBook,
    insertBooks,
    getAllBooks,
    fetchBookById,
    fetchBookByGenre,
    updateBookById,
    updatedManyBooks,
    deleteBookById,
    deleteManyBooksByCondition
} from './controllers/bookController.js';
import { updateManyMoviesByCondition } from '../Mongoose/controllers/movieController.js';

const app = express();

const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/monRev';
const port = process.env.PORT || 8000;

await connectDB(DB_URL);
app.listen(port, () =>{
    console.log("Server is running on port " + port);
})

// await createBook();
// await insertBooks();
// await getAllBooks();
// await fetchBookById("695e28577ab635602d325cb1");
// await fetchBookByGenre({genres: "Fantasy"});
// await updateBookById("695e28577ab635602d325cb1");
// await updatedManyBooks({genres: "Fantasy"}, {price: 15.99});
// await deleteBookById("695e2c3c826182e68c344d21")
await deleteManyBooksByCondition({price: {$gt: 18}});

