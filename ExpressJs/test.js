


const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Can send plain text, html or json as well
//app.get('/', (req, res) => res.send("Hello There"));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

// To use setup static folder
app.use(express.static(path.join(__dirname, 'public')));
// this opens all the files in public folder but need to include .html


let posts = [
    {id: 1, 'name': "alice"},
    {id: 2, 'name': "bob"},
    {id: 3, 'name': "charlie"}
];
app.get('/', (req, res) => {
    res.send("Hello There");
});

app.get('/api/posts', (req, res) => {
    res.json(posts);
})


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});

