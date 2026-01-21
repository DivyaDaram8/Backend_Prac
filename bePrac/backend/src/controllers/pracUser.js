// Code Without using errorHandler and asyncHandler



import pracUser from '../models/pracUser.model.js';


// @desc Adding a user
// @route POST /registerUser

export const registerUser = async (req, res) => {
    try{
        // basic validation to check any missing required field
        const {name, email, username, password} = req.body;
        if(!name || !email || !username || !password){
            return res.status(400).json({message: "Please enter all the fields"});
        }

        const normalizedEmail = email.toLowerCase();
        const normalizedUsername = username.toLowerCase();

        // checking if the user already exists
        const isExist = await pracUser.findOne({
            $or : [{email: normalizedEmail}, {username: normalizedUsername}]
        })

        if(isExist){
            return res.status(400).json({message: "User exists already"});
        }

        // create and save user and the result is returned to the variable object 'user'
        const user = await pracUser.create({
            name,
            email: normalizedEmail,
            username: normalizedUsername,
            password
        });

        // Instead of passing all the details of the user returned we only return selected fields
        return res.status(201).json({
            message: "User Registered",
            user: {id: user._id, email: user.email, username: user.username}
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Failed to register user"});
    }
}


// @desc Login the user
// @route POST /login

export const loginUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        if((!username && !email) || !password){
            return res.status(400).json({
                message: "Must enter required fields"
            });
        } 
        const normalizedEmail =  email ? email.toLowerCase() : null;
        const normalizedUsername = username ? username.toLowerCase() : null;


        // Find the user
        const user = await pracUser.findOne({
            $or: [
                normalizedEmail ? {email: normalizedEmail} : null,
                normalizedUsername ? {username: normalizedUsername} : null
            ].filter(Boolean) // removes nulls
        });
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }
        return res.status(200).json({
            message: "User Logged in successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
};


// @desc Change the Password
// @route POST /changePswd

export const changePassword = async(req, res) => {
    try{
        const{oldPassword, newPassword, email} = req.body;
        if(!oldPassword || !newPassword || !email){
            return res.status(400).json({message: "Must enter all the fields"});
        }
        const user = await pracUser.findOne({email});
        if(!user){
            return res.status(404).json({message: "User Not found"});
        }

        // must use user.comparePassword not PracUser.comparePassword because we stored the guy found in the name 'user'
        const isMatch = await user.comparePassword(oldPassword);
        if(!isMatch){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        user.password = newPassword;
        await user.save();
        return res.status(200).json({
            message: "Password changed successfully"
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}