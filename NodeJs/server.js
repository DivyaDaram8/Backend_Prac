import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const PORT = process.env.port || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);
  
const server = http.createServer(async (req, res) => {

    console.log(req.url);
    console.log(req.method);
    // used to log the request url and method in the server console.
  
    // res.write("Hello, welcome to the Node.js server!");
    // res.end();
    // res.end("Hello there") // this line can also be used to send response and end the response.

    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Hello world !</h1>');

    // res.writeHead(200, {'Content-Type': 'text/plain' });
    // res.end(JSON.stringify({message: "Hello, welcome to the Node.js server!"}));
    // only for sending json response we can use above line.

    // res.end("Hello, welcome to the Node.js server!");

    // if(req.url === '/'){
    //             res.writeHead(200, {'Content-Type': 'text/plain' });
    //             res.end("Hello, welcome to the Node.js server!");
    //         }else if(req.url === '/about'){
    //             res.writeHead(200, {'Content-Type': 'text/plain' });
    //             res.end("This is the about page of our Node.js server.");
    //         }else{
    //             res.writeHead(404, {'Content-Type': 'text/plain' });
    //             res.end("404 Not Found. The page you are looking for does not exist.");
    //         }
    try{
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html');
            }else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error("File Not Found");
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(data);
        }
        else{
            throw new Error("Unsupported HTTP method");
        }
    }catch(err){
        res.writeHead(500, {'Content-Type': 'text/plain' });
        res.end("500 Internal Server Error.");
    }



    
});

 
server.listen(PORT, () => {
    console.log("Server is running on : " + PORT);
})
