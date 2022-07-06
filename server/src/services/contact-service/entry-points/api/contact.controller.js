const { sendTextEmail } = require('../../domain/contact.usecase');

async function httpSendEmail(req, res) {
  try {
    await sendTextEmail({ body: req.body });
    return res.status(200).json('Email send successfully');
  } catch (errors) {
    console.log(errors);
    return res.status(502).json('Something went wrong');
  }
}

module.exports = { httpSendEmail };
