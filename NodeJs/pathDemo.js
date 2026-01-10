import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/text.txt';

//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'text.txt');
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'text.txt');
console.log(filePath3);


// path.join()
// - Just joins the path segments you give it
// - Returns a relative path (unless you pass an absolute one)
// - Does NOT use current working directory automatically
// - Works left → right
// - Does NOT create files or folders
// Example: path.join('a', 'b') → 'a/b'

// path.resolve()
// - Builds an absolute path
// - Uses current working directory (process.cwd())
// - Works right → left
// - Stops once it hits an absolute path (/ or C:\)
// - Does NOT create files or folders
// Example: path.resolve('a', 'b') → '/cwd/a/b'
