import app from './app.js';
import dotenv from 'dotenv';
import connectDb from "./config/connectDB.js";

dotenv.config();
const port = process.env.PORT || 8000;

const startServer = async() => {
    try{
        await connectDb();
        app.listen(port, () => {
            console.log("Server is running on PORT: ", port)
        })
    }catch(err){
        console.log("Mongo DB connection failed!!! ",err);
        process.exit(1);
    }
}

startServer();