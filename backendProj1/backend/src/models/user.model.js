import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            minLength: 4,
            maxLength: 20,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 20,
        },
        email:{
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }  
)

// before saving password, hashing is done
userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// compare passwords
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


const User = mongoose.model("User", userSchema);
export default User;