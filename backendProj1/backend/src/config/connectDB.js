import mongoose from 'mongoose';


const connect = async (DB_URL) => {
    try{
        await mongoose.connect(DB_URL);
        console.log("Successfully connect to Database");
    }catch(err){
        console.log("Can't connect to the DB", err);
        process.exit(1);
    }
};

export default connect;