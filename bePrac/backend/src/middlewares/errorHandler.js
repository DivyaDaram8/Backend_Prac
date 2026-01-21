const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
}

export default errorHandler;


// errorHandler is a special Express middleware

// err → the error object thrown anywhere in the app
// req → request object (available if needed)
// res → response object (used to send error response)
// next → used to pass error further (rarely needed here)

// Express identifies error middleware ONLY by this signature:
// (err, req, res, next)
// If "err" is missing, Express will NOT treat it as an error handler

// statusCode → taken from ApiError
// fallback to 500 if not provided

// res.status(...).json(...)
// sends the FINAL response to the client

// errorHandler ends the request
// no next() needed
