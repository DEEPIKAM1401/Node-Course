import crypto from 'crypto';

// createHash 
// const hash = crypto.createHash('sha256');
// hash.update('password1234');
// console.log(hash.digest('hex'));

// crypto.randomBytes(8, (err, buf)=>{
//     if(err) throw err;
//     console.log(buf.toString('hex'));
// });

const algo = 'aes-256-cbc'; // Example algorithm, ensure it matches between encryption and decryption
const key = crypto.randomBytes(32); // Key should be of the appropriate length for the algorithm
const iv = crypto.randomBytes(16); // Initialization vector should be of the appropriate length

const cipher = crypto.createCipheriv(algo,key,iv);
let encrypted = cipher.update('Hello, this is the secret message','utf8','hex');
encrypted+=cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algo,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
encrypted+=decipher.final('utf8');
console.log(decrypted);