const admin = require('firebase-admin');

const serviceAccount = require('#configs/serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
