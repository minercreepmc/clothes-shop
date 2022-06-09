const { verifyToken } = require('#share/utils/firebase/firebase.utils');

const authCheck = async (req, res, next) => {
  try {
    const fireBaseUser = await verifyToken(req.headers.accesstoken);
    req.user = fireBaseUser;
    next();
  } catch (errors) {
    res.status(401).json({
      error: 'Invalid or expired token',
    });
  }
};

module.exports = {
  authCheck,
};
