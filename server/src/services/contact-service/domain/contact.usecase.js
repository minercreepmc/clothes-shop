const { sendEmail } = require('#shares/utils/nodemailer/nodemailer.utils');

async function sendTextEmail({ body }) {
  const { text, emailFrom } = body;

  await sendEmail({ text, emailFrom });
}

module.exports = {
  sendTextEmail,
};
