const admin = require('firebase-admin');

const serviceAccount = require('../../../configs/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyToken(accessToken) {
  return admin.auth().verifyIdToken(accessToken);
}

module.exports = {
  verifyToken,
};
