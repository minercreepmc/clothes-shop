const getSubStringFromTo = (string, from, to) =>
  string.substring(from, string.indexOf(to));

const createRequest = (body, headers) => ({ body, headers });

module.exports = {
  getSubStringFromTo,
  createRequest,
};
