const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
async function sendEmail({ text, emailFrom }) {
  await transport.sendMail({
    from: emailFrom,
    to: process.env.MAIL_USER,
    subject: 'test email',
    text,
  });
}

module.exports = { sendEmail };
