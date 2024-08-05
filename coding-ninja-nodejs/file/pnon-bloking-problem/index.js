// Please do not change the prewritten code



const Solution = () => {
  const fs = require("fs");
  fs.appendFile("note.txt", "new data", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data updated successfully");
    }
  });

  fs.readFile("note.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
};
Solution();
module.exports = Solution;
