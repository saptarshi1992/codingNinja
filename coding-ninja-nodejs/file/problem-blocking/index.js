// Please don't change the pre-written code
// Import the necessary modules here

const Solution = () => {
  // Write your code here
  const fs = require('fs');
  try {
    fs.writeFileSync('notes.txt', "The world has enough coders ");
  }
  catch (err) {
    console.log('error in file write operation' + err);
  }
  const buffer = fs.readFileSync("notes.txt", { encoding: 'utf8' });
  console.log(buffer.toString());
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  const buffer1 = fs.readFileSync("notes.txt", { encoding: 'utf8' });
  console.log(buffer1.toString());

};
Solution();
module.exports = Solution;
