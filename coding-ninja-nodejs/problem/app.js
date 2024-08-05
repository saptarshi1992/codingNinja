// Note:  Please do not change the pre-written code

// import the required module here

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    const arithmetic = require('./math');
    const sum = arithmetic.sum(nums);
    console.log(sum);
    const mean = arithmetic.mean(nums);
    console.log(mean);

};
Solution();
module.exports = Solution;

