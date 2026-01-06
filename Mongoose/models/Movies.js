import mongoose from 'mongoose';

// 1. Defining Schema

const movieSchema = new mongoose.Schema({
    name : {type: String, required: true, trim: true},
    ratings : {type: Number, required: true, min: 1, max: 10},
    money : {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 500000
    },
    genre : {type: Array},
    isActive : {type: Boolean, default: true},
    comments : [
        {value : {type: String}, publishedAt : {type: Date, default: Date.now}}
    ],
});

// 2. Creating Model
const movieModel = mongoose.model('Movie', movieSchema);

// 3. Exporting Model
export default movieModel;


