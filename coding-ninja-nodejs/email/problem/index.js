// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  takeInput.question("Enter Your Email:", (input) => {
    sendMail(input);
    takeInput.close();
  })
};

async function sendMail(input) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj"
    },
  });
  const mailoptions = {
    from: "codingninjas2k16@gmail.com",
    to: input,
    subject: "Coding Ninjas",
    text: "The world has enough coders; be a coding ninja!"
  };
  try {
    const result = await transporter.sendMail(mailoptions);
    console.log("Email sent sucessfully");

  } catch (err) {
    console.log("getting error " + err);
  }
}
export default Solution;
