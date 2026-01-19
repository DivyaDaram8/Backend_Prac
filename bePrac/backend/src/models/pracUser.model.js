import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const pracUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

pracUserSchema.pre("save", async function(){
    // was the password set or changed, if so, then skip if block and hashing is done
    // if the user updated any of the field other than password, isModified gives false, then if becomes true, then the return is executed
    if(!this.isModified("password")){
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//compare passwords
// comparePassword is variable which holds function, userSchema.methods means we are assigning each and every doc with the function
pracUserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


const PracUser = mongoose.model("PracUser", pracUserSchema);
export default PracUser;