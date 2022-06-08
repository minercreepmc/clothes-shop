const getSubStringFromTo = (string, from, to) =>
  string.substring(from, string.indexOf(to));

module.exports = {
  getSubStringFromTo,
};
