const stuff=require('./text');
console.log(stuff.item ); // this will give empty object until there is export statement in text file


// or it can be also written as
const {nums}=require('./text');
console.log(nums,'are nums');


const  os = require('os');
console.log(os.platform(),os.homedir())