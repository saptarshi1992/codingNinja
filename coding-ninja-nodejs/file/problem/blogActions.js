// Do not change the pre-written code.
// Make the necessary imports here.

//import fs from "fs";
const fs = require('fs');

export const writeBlog = (filePath, name) => {
    // Write your code here.

    //const path = require('path');
    fs.writeFileSync(filePath, name);

}

export const publishBlog = (filePath) => {
    const buffer = fs.readFileSync(filePath, { encoding: 'utf8' });
    return buffer.toString();
}
