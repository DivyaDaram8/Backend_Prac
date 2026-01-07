import BookModel from "../models/Books.js";

export const createBook = async () => {
  try {
    const book = new BookModel({
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: new Date("1925-04-10"),
      genres: ["Fiction", "Classic"],
      price: 10.99,
      reviews: [
        { comment: "A masterpiece of 20th-century literature." },
        { comment: "Timeless and captivating." },
      ],
    });
    const result = await book.save();
    console.log("Book created successfully: ", result);
  } catch (err) {
    console.log(err);
  }
};

// insertMany

export const insertBooks = async () => {
  try {
    const b1 = new BookModel({
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: new Date("1851-10-18"),
      genres: ["Adventure", "Classic"],
      price: 11.49,
      reviews: [
        { comment: "A deep and symbolic tale of obsession and the sea." },
      ],
    });

    const b2 = new BookModel({
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: new Date("1960-07-11"),
      genres: ["Fiction", "Classic"],
      price: 12.99,
      reviews: [{ comment: "Powerful story about justice and morality." }],
    });

    const b3 = new BookModel({
      title: "1984",
      author: "George Orwell",
      publishedYear: new Date("1949-06-08"),
      genres: ["Dystopian", "Political Fiction"],
      price: 11.99,
      reviews: [{ comment: "A chilling vision of totalitarianism." }],
    });

    const b4 = new BookModel({
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: new Date("1813-01-28"),
      genres: ["Romance", "Classic"],
      price: 9.99,
      reviews: [{ comment: "Witty and elegant social commentary." }],
    });

    const b5 = new BookModel({
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: new Date("1951-07-16"),
      genres: ["Fiction", "Classic"],
      price: 10.49,
      reviews: [{ comment: "Iconic coming-of-age novel." }],
    });

    const b6 = new BookModel({
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishedYear: new Date("1937-09-21"),
      genres: ["Fantasy", "Adventure"],
      price: 14.99,
      reviews: [{ comment: "A magical adventure before Lord of the Rings." }],
    });

    const b7 = new BookModel({
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      publishedYear: new Date("1997-06-26"),
      genres: ["Fantasy", "Young Adult"],
      price: 15.99,
      reviews: [{ comment: "The beginning of a legendary wizarding journey." }],
    });

    const b8 = new BookModel({
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishedYear: new Date("1988-01-01"),
      genres: ["Fiction", "Philosophical"],
      price: 13.49,
      reviews: [{ comment: "Inspirational story about following dreams." }],
    });

    const b9 = new BookModel({
      title: "The Da Vinci Code",
      author: "Dan Brown",
      publishedYear: new Date("2003-03-18"),
      genres: ["Thriller", "Mystery"],
      price: 16.99,
      reviews: [{ comment: "Fast-paced and full of intrigue." }],
    });

    const b10 = new BookModel({
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: new Date("2018-10-16"),
      genres: ["Self-Help", "Non-Fiction"],
      price: 18.99,
      reviews: [{ comment: "Practical guide to building better habits." }],
    });

    const result = await BookModel.insertMany([
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10,
    ]);
    console.log("Multiple books are added: ", result);
  } catch (err) {
    console.log(err);
  }
};

// fetch all books
// iterate books
export const getAllBooks = async () => {
  try {
    const books = await BookModel.find();
    console.log("Books fetched successfully: ", books);
    console.log("Iterating through books");
    books.forEach((book) => {
      console.log(`Title: ${book.title}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// get book by id
export const fetchBookById = async(id) =>{
    try{
        const book = await BookModel.findById(id);
        if(book){
            console.log("Book fetched Successfully");
            console.log(book);
        }else{
            console.log("No Book found with the id given");
        }
    }catch(err){
        console.log(err);
    }
}



// get book by genre
export const fetchBookByGenre = async(genre) => {
    try{
        const booksByGenre = await BookModel.find(genre);
        console.log("Books fetched by genre successfully: ");
        console.log(booksByGenre);
    }catch(err){
        console.log(err);
    }
    
}



// update book by id
export const updateBookById = async(id) => {
    try{
        const book = await BookModel.findById(id);
        if(book){
            const updatedBook = await BookModel.findByIdAndUpdate(id, {
                price: 19.99,
            }, {new: true}
        );
            console.log(updatedBook);
        }else{
            console.log("No Book found with the id");
        }
    }catch(err){
        console.log(err);
    }
}



// update many books
export const updatedManyBooks = async(condition, updateTo) =>{
    try{
        const updatedBooks = await BookModel.updateMany(condition, updateTo);
        if(updatedBooks){
            console.log("Updated books based on conditon successfully", updatedBooks);
        }
    }catch(err){
        console.log(err);
    }
}

// delete book by id
export const deleteBookById = async(id) => {
    try{
        const book = await BookModel.findById(id);
        if(book){
            const deletedBook = await BookModel.findByIdAndDelete(id);
            console.log("Book deleted successfully: ", deletedBook);
        }else{
            console.log("No Book found with the id");
        }
    }catch(err){
        console.log(err);
    }
}



// delete many books by condition
export const deleteManyBooksByCondition = async(condition) => {
    try{
        const booksToDelete = await BookModel.find(condition);
        if(booksToDelete.length === 0){
            console.log("No books found to delete");
            return;
        }
        const result = await BookModel.deleteMany(condition);
        console.log("Books deleted successfully: ", booksToDelete);
    }catch(err){
        console.log(err);
    }
}