const ApiError = (res, code, message) => {
  const error = new Error(message);
  error.statusCode = code;
  return error;
};

export default ApiError;
