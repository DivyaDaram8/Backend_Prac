import fs from 'fs';
import fsPromises from 'fs/promises';

 //readFile - callback
// async version
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if(err){
        throw new Error(`Error: ${err.message}`);
        // or simply
        // throw err; 
        // it prints original err
    }
    console.log(data);
    // return data;  // because it is aysnc file, it might not have fetched by the time we return
 })

 //readFileSync() - sync version
 const data1 = fs.readFileSync('./text.txt', 'utf8');
 console.log(data1);


 // readFile() - Promise .then()

 fsPromises.readFile('./text.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// readFile() - aysnc/await

const readFile = async() => {
    try{
        const data = await fsPromises.readFile('./text.txt', 'utf8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// Write File
const writeFile = async () => {
    try{
        await fsPromises.writeFile('./text.txt', "Hello there, i am writing new text");
        console.log("File written");
    }catch(err){
        console.log(err);
    }
}



// appendFile
const appendFile = async () =>{
    try{
        await fsPromises.appendFile('./text.txt', '\nappending text to the text.txt');
    }catch(err){
        console.log(err);
    }
}





readFile();

writeFile();

appendFile();

