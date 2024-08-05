// Import required module
const readline = require('readline');

const Solution = () => {
  // Write your code here

  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  qInterface.question("enter the first number: ", (num1) => {
    qInterface.question("eneter the second number: ", (num2) => {

      const number1 = Number(num1);
      const number2 = Number(num2);

      // Determine and display the maximum number
      if (number1 > number2) {
        console.log("The maximum of the two numbers is: " + number1);
      } else {
        console.log("The maximum of the two numbers is: " + number2);
      }

      // Close the readline interface
      qInterface.close();
    })
  });
};

Solution();
module.exports = Solution;
