const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
interface.question("enter your question", (num1) => {
    interface.question("eneter your question", (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    })
});