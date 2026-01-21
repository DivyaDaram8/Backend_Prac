class ApiError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}

export default ApiError;
// ApiError is a custom error class
// It extends the built-in JavaScript Error class

// constructor runs when you create a new ApiError

// statusCode → HTTP status (400, 401, 404, 500, etc)
// message → error message to send to client

// super(message)
// calls the parent Error class constructor
// this sets error.message automatically

// this.statusCode = statusCode
// attaches HTTP status code to the error object
// Express default Error does NOT have statusCode


// ApiError = normal Error + HTTP status code



// Error.captureStackTrace(this, this.constructor);
// Error.captureStackTrace customizes the stack trace
// It removes the constructor from the error stack
// So logs point to the actual error location
