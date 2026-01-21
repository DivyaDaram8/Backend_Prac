import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 8000;


const startServer = async (port) => {
    try{
        await connectDB(process.env.DB_URL);

        app.listen(port, () =>{
            console.log("Server started on port", port);
        })
    }catch(err){
        console.log("Mongo db connection failed!!!", err);
        process.exit(1);
    }
}

startServer(port);





// startServer({
//   port: process.env.PORT || 8000,
//   dbUrl: process.env.DB_URL
// });








