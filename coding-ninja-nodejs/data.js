const fs = require('fs');
const buffer = fs.readFileSync('data.txt', { encodeing: 'utf8' });
console.log(buffer.toString());