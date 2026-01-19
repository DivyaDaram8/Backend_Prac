import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database is connected successfully");
    }catch(err){
        console.log("Connection Failed",err);
        process.exit(1);
    }
}

export default connectDB;