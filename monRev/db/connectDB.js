import mongoose from 'mongoose';

const connectDB = async(DB_URL) =>{
    try{
        await mongoose.connect(DB_URL);
        console.log("Database connected successfully");
    }catch(err){
        console.log
    }
}
export default connectDB;