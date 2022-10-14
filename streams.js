// stream is basically  excessing data while its loading simuntaneously
const fs= require('fs');

const readStream = fs.createReadStream('./docs/item2.txt',{encoding:'utf8'}); // data comes in string format
const writeStream = fs.createWriteStream('./docs/item3.txt');


// whenver we get a chunk of data we fire an event , on is event listener
readStream.on('data',(chunk)=>{
console.log("----new chunk----");
console.log(chunk);
writeStream.write("\nnew chuck added below\n");
writeStream.write(chunk);
});