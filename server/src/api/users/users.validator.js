const Validator = require('fastest-validator');

const validator = new Validator();

// validator.add('firebasetoken', ({ schema, messages}, path, context) => {
//   return
// })

const schema = {
  email: { type: 'email', message: 'email' },
  displayName: {
    type: 'string',
    min: 3,
    max: 255,
    optional: true,
  },
  address: { type: 'string', min: 3, optional: true },
  // TODO: Firebase auth
  accessToken: { type: 'string' },
};

const check = validator.compile(schema);

const checkUser = (data) => {
  // true => validate successful
  // will return array (of errors) if !== true
  let errors = {};
  let success = false;

  if (check(data) === true) {
    success = true;
  } else {
    errors = check(data);
  }

  return { success, errors };
};

module.exports = {
  checkUser,
};
