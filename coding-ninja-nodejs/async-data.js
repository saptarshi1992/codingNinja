const fs = require("fs");
fs.readFile("data.txt", (err, data) => {
    if (err) {
        console.log('getting error of file process' + err);
    } else {
        console.log(data.toString());
  } 
});

// fs.appendFile("data.txt", "age:60", (err) => {
//     if (err) { console.log("error" + err); }
//     else {
//         console.log("success");
//     }
// });
fs.unlink("data.txt", (err) => {
    if (err) {
        console.log('getting error in processing file');
    }
});
console.log("file operation");