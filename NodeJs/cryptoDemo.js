import crypto from 'crypto';

//createHash()
const hash = crypto.createHash('sha256');
hash.update('password123');
console.log(hash.digest('hex'));


// randomBytes()
crypto.randomBytes(16, (err, buf) => {
    if(err){
        throw err;
    }
    console.log(buf.toString('hex'));
});

// createCipheriv & createDecipheriv
const algo = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const cipher = crypto.createCipheriv(algo, key, iv);
let encrypted = cipher.update("hello, this is a secret message", 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algo, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log(decrypted);

