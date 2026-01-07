import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        comment: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const BookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedYear: {
        type: Date,
        default: Date.now,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    reviews: [reviewSchema],
})

const BookModel = mongoose.model('Book', BookSchema);

export default BookModel;