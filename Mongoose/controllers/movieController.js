import movieModel from "../models/Movies.js"; 
 
export const createMovie = async() => {
    try{
        const movie = new movieModel({
            name: "The Matrix",
            ratings: 9,
            money: 1500000.00,
            genre: ['action', 'sci-fi'],
            comments: [{value: "Great Movie!"}, {value: "Must Watch!" , publishedAt: new Date("2025-01-01")}],
            isActive: true
        });
        const result = await movie.save();
        console.log("Movie created successfully: ", result);
    }catch(err){
        console.log(`Error in creating movie: ${err}`);
    }
}


export const createMultipleMovies = async() => {
    try{
        const m1 = new movieModel({
            name: "Interstellar",
            ratings: 8,
            money: 2000000.00,
            genre: ['adventure', 'sci-fi'],
            comments: [{value: "Amazing Visuals!"}, {value: "Thought Provoking!" , publishedAt: new Date("2024-12-01")}],
            isActive: true
        })
        const m2 = new movieModel({
            name: "The Dark Knight",
            ratings: 9,
            money: 2500000.00,
            genre: ['action', 'crime'],
            comments: [{value: "Best Batman Movie!"}, {value: "Heath Ledger was phenomenal!" , publishedAt: new Date("2023-11-01")}],
            isActive: true
        })
        const m3 = new movieModel({
            name: "Forrest Gump",
            ratings: 8,
            money: 1800000.00,
            genre: ['drama', 'romance'],
            comments: [{value: "A classic!"}, {value: "Beautiful story!", publishedAt: new Date("2024-01-01")}],
            isActive: true
        })
        const result = await movieModel.insertMany([m1, m2, m3]);
        console.log("Multiple movies created successfully: ", result);
    }catch(err){
        console.log(`Error in creating multiple movies: ${err}`);
    }
}


export const getAllMovies = async() =>{
    try{
        const movies = await movieModel.find();
        console.log("Movies fetched successfully: ", movies);
    }catch(err){
        console.log(err);
    }
}

export const getMovieById = async(id) =>{
    try{
        const movie = await movieModel.findById(id);
        const movieName = await movieModel.findById(id, "name");

        console.log("Movie fetched by ID successfully: ", movie);
        console.log("Movie Name fetched by ID successfully: ", movieName);
    }catch(err){
        console.log(err);
    }
}

export const iteratingMovies = async() => {
    try{
        const fetchMovies = await movieModel.find();
        fetchMovies.forEach((movie) =>{
            console.log(`Movie Name : ${movie.name}`);
        })
    }catch(err){
        console.log(err);
    }
}


export const updateMovieById = async(id) => {
    try{
        const updatedMovie = await movieModel.findByIdAndUpdate(id, {
            ratings: 10,
            money: 3000000.00
        }, {new: true});
        console.log("Movie updated successfully: ", updatedMovie);
    }catch(err){
        console.log(err);
    }
}

export const updateManyMoviesByCondition = async(condition, updateData) => {
    try{
        const result = await movieModel.updateMany(condition, updateData);
        console.log("Movies updated successfully: ", result);
    }catch(err){
        console.log(err);
    }
}

export const deleteMovieById = async(id) => {
    try{
        const deletedMovie = await movieModel.findByIdAndDelete(id);

        if(!deletedMovie){
            console.log("Movie not found with the given ID.");
            return;
        }
        console.log("Movie deleted successfully: ", deletedMovie);
    }catch(err){
        console.log(err);
    }
}

export const deleteManyMoviesByCondition = async(condition) => {
    try{
        const moviesToDelete = await movieModel.find(condition);
        if(moviesToDelete.length === 0){
            console.log("No movies found to delete");
            return;
        }
        const result = await movieModel.deleteMany(condition); 
        // result is anyhow null
        console.log("Movies deleted successfully: ", moviesToDelete);
    }catch(err){
        console.log(err);
    }
}


// We can update documents using updateOne, updateMany,
// findOneAndUpdate, or findByIdAndUpdate.

// updateOne() updates the first document that matches the condition.
// updateMany() updates all documents that match the condition.

// findOneAndUpdate() updates the first matching document
// and can return the updated document if { new: true } is used.

// findByIdAndUpdate() updates a single document by its _id
// and can return the updated document if { new: true } is used.

// NOTE:
// updateOne() and updateMany() DO NOT return the updated document.
// { new: true } works ONLY with findOneAndUpdate / findByIdAndUpdate.


// Similarly, we can delete documents using deleteOne, deleteMany,
// findOneAndDelete, or findByIdAndDelete.
// deleteOne() deletes the first document that matches the condition.
// deleteMany() deletes all documents that match the condition.
// findOneAndDelete() deletes the first matching document and returns it.
// findByIdAndDelete() deletes a single document by its _id and returns it.
// NOTE:
// deleteOne() and deleteMany() DO NOT return the deleted document.
// findOneAndDelete and findByIdAndDelete return the deleted document.