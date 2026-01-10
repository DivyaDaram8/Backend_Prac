import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' } 
]

// Middleware processes the request and passes it on.
// Handler finishes the request and sends the response.

// Middleware functions for logging and setting content type
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
// Middleware to set JSON content type
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Handlers - Get all users and Get user by ID
// Get all users Handler
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}
// Get user by ID Handler
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => {
        return user.id === parseInt(id);
    });
    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode = 404;
        res.write(JSON.stringify({message : 'User Not Found'}));
    }
    res.end();
}

// Not found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'Route Not Found'}));
    res.end();
}


// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (piece) => {
        body += piece.toString();
    })
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


const server = http.createServer((req, res) => {
    loggerMiddleware(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.method === 'GET' && req.url === '/api/users') {
                getUsersHandler(req, res);
            }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }else if(req.url === '/api/users' && req.method === "POST"){
                createUserHandler(req, res);
            }
            else{
                notFoundHandler(req, res);
            }
        })     
    
    })
})

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/users') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(users));

//     }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
//         const id = req.url.split('/')[3];
//         // console.log(id);
//         const user = users.find((user) => {
//             return user.id === parseInt(id);
//         })
//         if(user){
//             res.setHeader('Content-Type', 'application/json');
//             res.write(JSON.stringify(user));
//             res.end();
//         }else{
//             res.setHeader('Content-Type', 'application/json');
//             res.statusCode = 404;
//             res.write(JSON.stringify({error : 'User Not Found'}));
//             res.end();
//         }
//     }else{
//         res.writeHead(404, {'content-type': 'application/json'});
//         res.write(JSON.stringify({ error: 'Method Not Found' }));
//         res.end();
//     }
// })


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})