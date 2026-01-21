import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import User from '../models/pracuser.model.js';
import ApiError from '../utils/ApiError.js';

const protect = asyncHandler(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify the token
            // decoded is the array of id, iat, exp
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch(err){
            console.log(err);
            throw new ApiError(401, "Not Authorized");
        }
    }
    if(!token){
        throw new ApiError(401, "No token, not authorized");
    }
})

export default protect;