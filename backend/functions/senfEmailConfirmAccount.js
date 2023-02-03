import nodemailer from 'nodemailer';

const sendEmailConfirmAccount = async (client) => {
    console.log(client)
    // var transport = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASS
    //     }
    // });

    // var message = {
    //     from: "chatApp@boot.com",
    //     to: client.email,
    //     subject: "Confirm your Account at Chat-App",
    //     html: `
    //     <h1>Hello ${client.username}!!</h1> 
    //     <p>You recently created an account at Chat-App, to confirm your account, click on the link below:</p>
    //     <a href='${process.env.FRONTEND_PORT}/confirm-account/${client.token}'>Confirm my account</a>
    //     <p>If this wasn't you, you can ignore the email</p>
    //     `
    //   };

    //   await transport.sendMail(message, (error, info) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Email sent: " + info.response);
    //     }
    // });
}

export default sendEmailConfirmAccount