const promiseError = message => {
  let error = {
    error: true,
    message: message
  };
  return Promise.resolve(error);
};

module.exports = {
  promiseError
};
