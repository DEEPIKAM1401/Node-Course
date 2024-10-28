import path, { dirname } from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

//basename()
console.log(path.basename(filePath));

// dirname
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));

// import.meta.url: This gives you the URL of the current module file.
// fileURLToPath(import.meta.url): Converts the URL to a file path.
// dirname(__filename): Gets the directory name of the file path.

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, __filename);

//join() - It takes only given directory and joined given names

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve - It takes with base directory

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);



const resolvedPath = path.resolve('/root', 'folder', 'file.txt');
console.log(resolvedPath);