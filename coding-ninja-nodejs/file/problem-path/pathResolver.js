// Import the necessary modules here.

exports.getAbsolutePath = (filePath) => {
    // Write your code here
    const path = require('path');
    //const file_to_Path = path.join("src", "file.txt");
    const file_to_Path = path.resolve(filePath);
    // console.log(file_to_Path);
    return file_to_Path;
};
