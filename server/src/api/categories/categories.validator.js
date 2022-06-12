const Validator = require('fastest-validator');

const validator = new Validator();

const schema = {
  name: { type: 'string', min: 2, max: 32, trim: true },
  slug: { type: 'string', lowercase: true, unique: true },
};

const #check = validator.compile(schema);

function check(data) {
  let success = false;
  let errors = null;

  const result = #check(data);
  if (result === true) {
    success = true;
  } else {
    errors = result;
  }

  return { success, errors };
}

module.exports = { check };
