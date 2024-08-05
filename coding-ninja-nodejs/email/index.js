const nodemailer = require("nodemailer");
//conf email::
async function sendMail() {
    //transporter
    //SMTP 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saptarshi34.sc@gmail.com',
            pass: 'ylurlpwwzmbuordk'
        },
    });
    //conf email
    const mailoptions = {
        from: 'saptarshi34.sc@gmail.com',
        to: 'saptarsh.chak@gmail.com',
        subject: 'Test for sending mail via Nodejs',
        text: 'this is test mail for sending mail via nodejs nodemailer modules'
    };
    //send mail
    try {
        const result = await transporter.sendMail(mailoptions);
        console.log("Email send sucessfully")

    } catch (err) {
        console.log("Getting error to sending an Email: " + err);
    }
}
sendMail();