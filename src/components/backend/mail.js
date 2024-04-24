const nodemailer = require("nodemailer");
const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  


transporter.verify(function(error, success) {
    if (error) {
      console.error('SMTP connection error:', error);
    } else {
      console.log('SMTP connection successful');
    }
  });
// Enable Nodemailer debugging
transporter.on('debug', (info) => {
  console.log('Nodemailer Debugging:', info);
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  try {
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: process.env.SMTP_MAIL_TO,
      subject: `"Contact Form Submission:"${email}`, // You might want to format the subject better
      text: `${name} \n ${email} \n ${message}`, // Specify the email content
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

module.exports = { sendEmail };
