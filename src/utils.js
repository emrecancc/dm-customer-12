function processUser(user = {}) {
  const { street } = user;
  // Example logic: return street or default
  return street || '';
}

module.exports = { processUser };
