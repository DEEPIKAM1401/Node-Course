// import fs from 'fs';
import { appendFile, readFile, writeFile } from 'fs';
import fs from 'fs/promises';

// readFile() - callback

// fs.readFile('./notes.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// readFileSync() - Synchronous version

// const data = fs.readFileSync('./notes.txt', 'utf8');
// console.log(data);

// readFile() - Promis .then()

// fs.readFile('./test.txt', 'utf8')
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err));

// readFile() - async/await

const readdFile = async() =>
{
    try
    {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}
readdFile();

// writeFile

const writeeFile = async() => {
    try
    {
        await fs.writeFile('./test.txt', 'Hello Deepika');
        console.log("File written to....");

    }
    catch(error)
    {
        console.log(error);
    }
};

// appendFile

const appenddFile = async() => {
    try
    {
        await fs.appendFile('./test.txt', '\n Tis is an appended text');
        console.log('File appended to....');
    }
    catch(error)
    {
        console.log(error);
    }
};

writeeFile();
appenddFile();
readdFile();