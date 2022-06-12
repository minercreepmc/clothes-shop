const { verifyToken } = require('#share/utils/firebase/firebase.utils');
const UsersRepo = require('#api/users/users.repository');

const authCheck = async (req, res, next) => {
  try {
    const fireBaseUser = await verifyToken(req.headers.accesstoken);
    req.user = fireBaseUser;
    next();
  } catch (errors) {
    res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};

const adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const user = await UsersRepo.getUserByEmail(email);
  if (user.role !== 'admin') {
    return res
      .status(403)
      .json({ message: 'You are not authorized to access this resources' });
  }

  return next();
};

module.exports = {
  authCheck,
  adminCheck,
};
