const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;

// asyncHandler is a wrapper for async controller functions

// (fn) → fn is your async controller (like loginUser)

// (req, res, next) → returned function that Express understands

// fn(req, res, next) → runs your async controller

// Promise.resolve(...) → makes sure the result is treated as a Promise
// (covers both async errors and normal thrown errors)

// .catch(next) → if any error happens,
// it automatically calls next(error)

// next(error) → sends the error to Express error middleware



// asyncHandler automatically catches async errors
// and forwards them to the global error handler

// If a function RETURNS a middleware → you’ll see two =>
// If it IS the middleware → one => is enough