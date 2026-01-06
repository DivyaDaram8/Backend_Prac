import mongoose, { connect } from "mongoose";

const connectDB = async (DB_URL) => {
    try{
        await mongoose.connect(DB_URL)
        console.log("Database connected successfully")
    } catch (error){
        console.log(error);
    }
}

export default connectDB;